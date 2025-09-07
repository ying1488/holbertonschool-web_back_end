export default function guardail(mathFunction) {
    let queue = [];
    try {
        const result = mathFunction();
        queue.push(result);
    } catch (err) {
        queue.push(err.toString());
    } finally {
        queue.push('Guardrail was processed');
    }

    return queue;
}