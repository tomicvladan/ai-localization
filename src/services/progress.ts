export type ProgressCallback = (percent: number) => boolean;

export class Progress {
  private completedRequests = 0;
  private currentProgress = 0;
  private currentInterval?: ReturnType<typeof setInterval>;

  private static requestInterval = 10;

  constructor(
    private numberOfRequests: number,
    private onProgressUpdate: ProgressCallback,
    private expectedDurationOfOneRquest = 10000
  ) {
    if (numberOfRequests <= 0) {
      throw new Error("Request number must be greater than zero");
    }
  }

  public onRequestStart() {
    this.currentInterval = setInterval(() => {
      this.currentProgress = Math.min(
        this.currentProgress + 100 / Progress.requestInterval,
        99
      );

      if (this.currentProgress >= 99) {
        this.clear();
      }

      this.onProgressUpdate(this.calculateTotalProgress());
    }, this.expectedDurationOfOneRquest / Progress.requestInterval);
  }

  public onRequestFinish(): boolean {
    this.clear();
    this.completedRequests += 1;
    this.currentProgress = 0;

    return this.onProgressUpdate(this.calculateTotalProgress());
  }

  public finalize() {
    this.clear();
  }

  private clear() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);

      this.currentInterval = undefined;
    }
  }

  private calculateTotalProgress(): number {
    const requestPercent = 100 / this.numberOfRequests;

    return (
      requestPercent * this.completedRequests +
      requestPercent * (this.currentProgress / 100)
    );
  }
}
