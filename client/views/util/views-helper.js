class ViewsHelper {
  determineClass(defaultClass, hide) {
    if (hide()) {
      return 'invisible';
    }
    return defaultClass;
  }
}

const viewsHelper = new ViewsHelper();
export { viewsHelper };
