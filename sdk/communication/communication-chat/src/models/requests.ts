// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ChatParticipant } from "./models.js";

export { SendReadReceiptRequest } from "../generated/src/models/index.js";

/** Participants to be added to the thread. */
export interface AddParticipantsRequest {
  /** Participants to add to a chat thread. */
  participants: ChatParticipant[];
}

/** Request payload for creating a chat thread. */
export interface CreateChatThreadRequest {
  /** The chat thread topic. */
  topic: string;
}

/** Details of the message to send. */
export interface SendMessageRequest {
  /** Chat message content. */
  content: string;
}
