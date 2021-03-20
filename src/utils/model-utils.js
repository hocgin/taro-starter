/**
 *
 * @param model
 * @param effects Function
 * @returns {string}
 */
export function dispatchType(model, effects) {
  return `${model.namespace}/${effects.name}`;
}
