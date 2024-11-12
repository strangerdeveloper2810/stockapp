import { httpClient } from '@/utils/settings';
import { isEmpty } from 'lodash';
const newsFeedServices = {
  getNewsFeed: async () => {
    try {
      const response = await httpClient.get('/news');
      if (isEmpty(response)) {
        return false;
      }
      console.log({ response });
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  },
};

export default newsFeedServices;
