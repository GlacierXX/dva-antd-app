import './index.less'
import dva           from 'dva'

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use();

// 3. Model
app.model(require('./models/base'));
app.model(require('./models/stories'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
