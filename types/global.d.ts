// Types for compiled templates
declare module '@nullvoxpopuli/automated-ci-test-addon/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
