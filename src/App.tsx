import './App.css'

function App() {

  return (
    <main className="App">
      <div className="IPhone-case">
        <div className="IPhone-stuff">
          <div className="IPhone-tail"></div>
          <div className="IPhone-buttons">
            <div className="IPhone-button"></div>
            <div className="IPhone-button"></div>
            <div className="IPhone-button"></div>
          </div>
        </div>
        <div className="calculator">
          <section className="display">
            <div className="current">
              <div className="expression">12+24</div>
              <div className="result">= 36</div>
            </div>
            <ul className="history">
              <li>
                <div className="expression">1+24</div>
                <div className="result">= 25</div>
              </li>
              <li>
                <div className="expression">1+2</div>
                <div className="result">= 3</div>
              </li>
            </ul>
          </section>
          <section className="keyboard">
            <button className="key controls">AC</button>
            <button className="key controls">
              <i className="fa-solid fa-square-root-variable"></i>
            </button>
            <button className="key controls">
              x<sup>y</sup>
            </button>
            <button className="key operations">
              <i className="fa-solid fa-divide"></i>
            </button>

            <button className="key number">7</button>
            <button className="key number">8</button>
            <button className="key number">9</button>
            <button className="key operations">
              <i className="fa-solid fa-xmark"></i>
            </button>

            <button className="key number">5</button>
            <button className="key number">6</button>
            <button className="key number">7</button>
            <button className="key operations">
              <i className="fa-solid fa-minus"></i>
            </button>

            <button className="key number">1</button>
            <button className="key number">2</button>
            <button className="key number">3</button>
            <button className="key operations">
              <i className="fa-solid fa-plus"></i>
            </button>

            <button className="key number">
              <i className="fa-solid fa-calculator"></i>
            </button>
            <button className="key number">0</button>
            <button className="key number">.</button>
            <button className="key operations">
              <i className="fa-solid fa-equals"></i>
            </button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
