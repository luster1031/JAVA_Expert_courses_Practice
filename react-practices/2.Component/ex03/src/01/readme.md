
### 01 : Inline Handler
1. App.js
```js
import React from 'react'

const App = () => {
    return (
        <div>
            <h1 
                onClick={e => console.log('click!') }
                style={{
                    cursor:'pointer'
                }}>
                    ex03 : InlineHandler
            </h1>
        </div>
    )
}

export default App
```

![image](https://user-images.githubusercontent.com/61460836/158290609-6fb5a022-5273-43ba-9f2e-9347049e3b71.png)