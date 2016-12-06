import './index.html'
import './index.less'
import dva           from 'dva'
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
  history: browserHistory
});

// 2. Plugins
//app.use();

// 3. Model
app.model(require('./models/base'));
app.model(require('./models/stories'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
