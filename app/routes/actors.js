import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return ['Morgan Freeman', 'Jennifer Lawrence', 'John Krasinski', 'Jenna Fischer']
  }
});
