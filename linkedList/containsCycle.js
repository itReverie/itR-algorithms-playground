//O(n) time and O(1) space.
function containsCycle(firstNode) {

    // start both runners at the beginning
    var slowRunner = firstNode;
    var fastRunner = firstNode;

    // until we hit the end of the linkedList
    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // case: fastRunner is about to "lap" slowRunner
        if (fastRunner === slowRunner) {
            return true;
        }
    }

    // case: fastRunner hit the end of the linkedList
    return false;
}
