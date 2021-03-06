// Initializes the `donationsHistory` service on path `/donations/:donationId/history` and `/donationHistory`
import createService from 'feathers-mongoose';
import createModel from '../../models/donationsHistory.model';
import hooks from './donationsHistory.hooks';

export default function() {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'donationsHistory',
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  // for viewing an individual donation history entities
  // app.use('/donations/:donationId/history', createService(options));
  // for querying all donationHistory entities
  app.use('/donations/history', new createService(options));

  // Get our initialized service so that we can register hooks and filters
  // const nestedService = app.service('donations/:donationId/history');
  const service = app.service('donations/history');

  // nestedService.hooks(nestedHistoryHooks);
  service.hooks(hooks);
}
