import moment from 'moment';

export default {
  filters: {
    shortDate(date) {
      return moment(date).format('MMM Do YYYY');
    },
  }
};
