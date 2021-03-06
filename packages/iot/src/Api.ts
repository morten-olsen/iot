import { AllowedValues } from './KeyValue';

interface ChangeRequest {
  [key: string]: AllowedValues;
}

interface ChangeRequestOptions {
  actor?: string;
  jwt?: string;
}

interface Api {
  setValues: (
    changes: ChangeRequest,
    options: ChangeRequestOptions
  ) => Promise<void>;
  getConfig: <Config = any>() => Promise<Config>;
  setConfig: <Config = any>(config: Config) => Promise<void>;
}

export { ChangeRequest, ChangeRequestOptions };

export default Api;
