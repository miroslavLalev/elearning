class ViewsHelper {
  determineClass(defaultClass, hide) {
    return hide() ? 'invisible' : defaultClass;
  };
};

const viewsHelper = new ViewsHelper();
export { viewsHelper };
