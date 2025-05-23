// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QueryRange } from "../../../src/routing/index.js";
import { createCompleteRoutingMap } from "../../../src/routing/CollectionRoutingMapFactory.js";
import { describe, it, assert } from "vitest";

describe("InMemoryCollectionRoutingMap Tests", () => {
  describe("getOverlappingRanges", () => {
    const partitionKeyRanges = [
      { id: "0", minInclusive: "", maxExclusive: "05C1C9CD673398" },
      {
        id: "1",
        minInclusive: "05C1C9CD673398",
        maxExclusive: "05C1D9CD673398",
      },
      {
        id: "2",
        minInclusive: "05C1D9CD673398",
        maxExclusive: "05C1E399CD6732",
      },
      {
        id: "3",
        minInclusive: "05C1E399CD6732",
        maxExclusive: "05C1E9CD673398",
      },
      { id: "4", minInclusive: "05C1E9CD673398", maxExclusive: "FF" },
    ];
    const partitionRangeWithInfo = partitionKeyRanges.map((r) => [r, true]);
    const collectionRoutingMap = createCompleteRoutingMap(partitionRangeWithInfo);

    it("queryCompleteRange", () => {
      const completeRange = new QueryRange("", "FF", true, false);
      const overlappingPartitionKeyRanges =
        collectionRoutingMap.getOverlappingRanges(completeRange);

      assert.equal(overlappingPartitionKeyRanges.length, partitionKeyRanges.length);
      assert.deepEqual(overlappingPartitionKeyRanges, partitionKeyRanges);
    });

    it("queryEmptyRange", () => {
      const emtpyRange = new QueryRange("05C1C9CD673396", "05C1C9CD673396", true, false);
      const overlappingPartitionKeyRanges = collectionRoutingMap.getOverlappingRanges(emtpyRange);

      assert.equal(overlappingPartitionKeyRanges.length, 0);
    });

    it("queryPoint", () => {
      const pointRange = new QueryRange("05C1D9CD673397", "05C1D9CD673397", true, true);
      const overlappingPartitionKeyRanges = collectionRoutingMap.getOverlappingRanges(pointRange);

      assert.equal(overlappingPartitionKeyRanges.length, 1);
      assert(overlappingPartitionKeyRanges[0].minInclusive <= pointRange.min);
      assert(overlappingPartitionKeyRanges[0].maxExclusive > pointRange.max);
    });

    it("boundaryPointQuery", () => {
      const pointRange = new QueryRange("05C1C9CD673398", "05C1C9CD673398", true, true);
      const overlappingPartitionKeyRanges = collectionRoutingMap.getOverlappingRanges(pointRange);

      assert.equal(overlappingPartitionKeyRanges.length, 1);
      assert(overlappingPartitionKeyRanges[0].minInclusive <= pointRange.min);
      assert(overlappingPartitionKeyRanges[0].maxExclusive > pointRange.max);
      assert(overlappingPartitionKeyRanges[0].minInclusive === pointRange.min);
    });
  });

  describe("All methods", () => {
    const partitionRangeWithInfo = [
      [
        {
          id: "2",
          minInclusive: "0000000050",
          maxExclusive: "0000000070",
        },
        2,
      ],
      [
        {
          id: "0",
          minInclusive: "",
          maxExclusive: "0000000030",
        },
        0,
      ],
      [
        {
          id: "1",
          minInclusive: "0000000030",
          maxExclusive: "0000000050",
        },
        1,
      ],
      [
        {
          id: "3",
          minInclusive: "0000000070",
          maxExclusive: "FF",
        },
        3,
      ],
    ];

    const collectionRoutingMap = createCompleteRoutingMap(partitionRangeWithInfo);

    it("validate _orderedPartitionKeyRanges", () => {
      assert.equal("0", collectionRoutingMap.getOrderedParitionKeyRanges()[0].id);
      assert.equal("1", collectionRoutingMap.getOrderedParitionKeyRanges()[1].id);
      assert.equal("2", collectionRoutingMap.getOrderedParitionKeyRanges()[2].id);
      assert.equal("3", collectionRoutingMap.getOrderedParitionKeyRanges()[3].id);
    });

    // TODO: bad practice to test implementation details
    it("validate _orderedPartitionInfo", () => {
      assert.equal(0, (collectionRoutingMap.orderedPartitionInfo as number[])[0]);
      assert.equal(1, (collectionRoutingMap.orderedPartitionInfo as number[])[1]);
      assert.equal(2, (collectionRoutingMap.orderedPartitionInfo as number[])[2]);
      assert.equal(3, (collectionRoutingMap.orderedPartitionInfo as number[])[3]);
    });

    it("validate getOverlappingRanges", () => {
      const completeRange = new QueryRange("", "FF", true, false);

      const compareId = function (a: any, b: any): number {
        // TODO: any
        return a["id"] - b["id"];
      };

      const overlappingRanges = collectionRoutingMap
        .getOverlappingRanges([completeRange])
        .sort(compareId);
      assert.equal(4, overlappingRanges.length);

      let onlyParitionRanges = partitionRangeWithInfo.map(function (item) {
        return item[0];
      });

      onlyParitionRanges = onlyParitionRanges.sort(compareId);
      assert.deepEqual(overlappingRanges, onlyParitionRanges);

      const noPoint = new QueryRange("", "", false, false);
      assert.equal(0, collectionRoutingMap.getOverlappingRanges([noPoint]).length);

      const onePoint = new QueryRange("0000000040", "0000000040", true, true);
      let overlappingPartitionKeyRanges = collectionRoutingMap.getOverlappingRanges([onePoint]);
      assert.equal(1, overlappingPartitionKeyRanges.length);
      assert.equal("1", overlappingPartitionKeyRanges[0].id);

      const ranges = [
        new QueryRange("0000000040", "0000000045", true, true),
        new QueryRange("0000000045", "0000000046", true, true),
        new QueryRange("0000000046", "0000000050", true, true),
      ];
      overlappingPartitionKeyRanges = collectionRoutingMap
        .getOverlappingRanges(ranges)
        .sort(compareId);

      assert.equal(2, overlappingPartitionKeyRanges.length);
      assert.equal("1", overlappingPartitionKeyRanges[0].id);
      assert.equal("2", overlappingPartitionKeyRanges[1].id);
    });
  });

  describe("Error Handling", () => {
    describe("Incorrect instantiation", () => {
      it("Invalid Routing Map", () => {
        const partitionRangeWithInfo = [
          [
            {
              id: "1",
              minInclusive: "0000000020",
              maxExclusive: "0000000030",
            },
            2,
          ],
          [
            {
              id: "2",
              minInclusive: "0000000025",
              maxExclusive: "0000000035",
            },
            2,
          ],
        ];
        try {
          createCompleteRoutingMap(partitionRangeWithInfo);
          assert.fail("must throw exception");
        } catch (e: any) {
          assert.equal(e.message, "Ranges overlap");
        }
      });

      // TODO: test does two things (code smell)
      it("Incomplete Routing Map", () => {
        let partitionRangeWithInfo = [
          [
            {
              id: "2",
              minInclusive: "",
              maxExclusive: "0000000030",
            },
            2,
          ],
          [
            {
              id: "3",
              minInclusive: "0000000031",
              maxExclusive: "FF",
            },
            2,
          ],
        ];
        let collectionRoutingMap = createCompleteRoutingMap(partitionRangeWithInfo);
        assert.equal(collectionRoutingMap, null);

        partitionRangeWithInfo = [
          [
            {
              id: "2",
              minInclusive: "",
              maxExclusive: "0000000030",
            },
            2,
          ],
          [
            {
              id: "2",
              minInclusive: "0000000030",
              maxExclusive: "FF",
            },
            2,
          ],
        ];
        collectionRoutingMap = createCompleteRoutingMap(partitionRangeWithInfo);
        assert.notEqual(collectionRoutingMap, null);
      });
    });
  });
});
