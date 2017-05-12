class ObjectsHelper {
  deepCloneObject(obj) {
    return Object.assign({}, obj);
  }

  mergeObjects(...objects) {
    let result = {};
    for (let obj of objects) {
      result = Object.assign(result, obj);
    }

    return result;
  }
}

const objectsHelper = new ObjectsHelper();
export { objectsHelper };
