import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './components/theme-provider';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Routes } from './Routes';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">
                <Routes />
              </main>
              <Footer />
            </div>
            <Toaster />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;