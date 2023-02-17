//services
import { apiService } from './HttpService';

class ConfigurationService {
  static fetchConfig(url: string) {
    return apiService({
      method: 'GET',
      url,
    });
  }
}

export default ConfigurationService;
