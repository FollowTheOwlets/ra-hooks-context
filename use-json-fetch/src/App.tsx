import React from 'react';
import './App.css';
import { useJsonFetch } from './hooks/useJsonFetch';
import { Data } from './models/Models';


interface AppHookProps {
  url: string;
  opts: string;
}

function AppHook({ url, opts }: AppHookProps) {
  const [data, isLoading, hasError] = useJsonFetch(url, opts);

  return (
    <div className="App">
      <h1>{data && (data as Data).status}</h1>
      <h1>{isLoading && 'Is Loading'}</h1>
      <h1>{hasError && 'Has Error'}</h1>
    </div>
  );
}

export default function App() {
  const url: string = "http://localhost:7070/";

  return (<div>
    <AppHook url={url} opts="data" />
    <hr />
    <AppHook url={url} opts="error" />
    <hr />
    <AppHook url={url} opts="loading" />
    <hr />
  </div>)
}