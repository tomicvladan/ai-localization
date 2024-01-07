import { Entry, LangEntriesMap } from "../model/entry";
import { Request } from "../model/request";
import { copyLangEntriesMap, isEmptyLangEntriesMap } from "../utils/entries";
import {
  constructMultiLangRequest,
  constructSingleLangRequest,
  getRequestSize,
  removeEntriesFromRequest,
} from "../utils/requests";
import { ProgressCallback } from "./progress";

export const DEFAULT_MAX_TRANSLATIONS_PER_REQUEST = 50;
export abstract class LLMTranslator {
  constructor(
    protected apiKey: string,
    protected maxTrnaslationsPerResponse: number = DEFAULT_MAX_TRANSLATIONS_PER_REQUEST
  ) {}

  public async translate(
    fromCode: string,
    entries: Entry[],
    missingEntries: LangEntriesMap,
    onProgressUpdate: ProgressCallback = () => false
  ): Promise<LangEntriesMap> {
    const requests = this.constructRequests(entries, missingEntries);

    const prompts = this.constructPrompts(fromCode, requests);

    const responses = await this.sendRequests(prompts, onProgressUpdate);

    const translations = this.parseResponses(responses, requests);

    return translations;
  }

  protected constructRequests(
    entries: Entry[],
    missingEntries: LangEntriesMap
  ): Request[] {
    const currentMissingEntries = copyLangEntriesMap(missingEntries);
    const requests: Request[] = [];

    while (!isEmptyLangEntriesMap(currentMissingEntries)) {
      const multiLangRequest = constructMultiLangRequest(
        entries,
        currentMissingEntries,
        this.maxTrnaslationsPerResponse
      );
      const singleLangRequest = constructSingleLangRequest(
        currentMissingEntries,
        this.maxTrnaslationsPerResponse
      );

      const request =
        getRequestSize(multiLangRequest) >= getRequestSize(singleLangRequest)
          ? multiLangRequest
          : singleLangRequest;

      requests.push(request);

      removeEntriesFromRequest(currentMissingEntries, request);
    }

    return requests;
  }

  protected abstract constructPrompts(
    fromCode: string,
    requests: Request[]
  ): string[];

  protected abstract sendRequests(
    prompt: string[],
    onProgressUpdate?: ProgressCallback
  ): Promise<string[]>;

  protected abstract parseResponses(
    response: string[],
    requests: Request[]
  ): LangEntriesMap;
}
