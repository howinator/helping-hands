export type ModelId = number;
export type Name = string;
export type Email = string;
export type Verified = boolean;
export type ZipCode = number;

export interface Human {
  id: ModelId;
  name: Name;
  email: Email;
}
export interface Helper {
  id: ModelId;
  human: Human;
  verified: Verified;
  zipCode?: ZipCode;
}

export interface HelpSeeker {
  id: ModelId;
  human: Human;
  zipCode?: ZipCode;
}

function toJson(human: Human): string {
  return JSON.stringify(human);
}

function toJson(helper: Helper): string {
  return JSON.stringify(helper);
}

function toJson(helpSeeker: HelpSeeker): string {
  return JSON.stringify(helpSeeker);
}
