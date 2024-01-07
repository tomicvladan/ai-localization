export function areSetsEqual(set1: Set<any>, set2: Set<any>): boolean {
  return (
    set1.size === set2.size &&
    Array.from(set1).every((element) => set2.has(element))
  );
}
