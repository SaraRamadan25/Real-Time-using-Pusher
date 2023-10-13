/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const options = {
    broadcaster: 'pusher',
    key: '73fa44c0135af92bc669'
}

window.Echo = new Echo({
    ...options,
    client: new Pusher(options.key, options)
});

 window.Echo.channel('orders').listen('OrderStatusUpdated', (e) => {
         console.log('Order status with an id of ' + e.order.id + ' has been updated behind the scenes'
         );
         console.log(e);
     });
