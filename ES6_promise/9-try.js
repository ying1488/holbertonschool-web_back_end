export default function guardrail(mathFunction){
    const queue = [];
    try {
        const result = mathFunction();
        queue.push(result, 'Guardrail was processed');
    } catch (error){
        queue.push(error.toString(), 'Guardrail was processed');
    }
    return queue;
}