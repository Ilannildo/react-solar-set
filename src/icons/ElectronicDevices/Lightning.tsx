import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Lightning = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.94 17.636c-.078.769-.251 1.286-.643 1.672C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v1.182M12 20v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m12 12-1.5 2h3L12 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 5h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h2.4M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12 20v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m12 12-1.5 2h3L12 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M11 5h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h2.4M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4M12 20v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m12 12-1.5 2h3L12 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 5h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.25 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12.6 12.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12l.6-.8Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.962 1.25c-.67 0-1.229 0-1.681.046-.473.048-.913.153-1.309.417-.3.201-.558.459-.759.76-.264.395-.369.835-.417 1.308-.046.452-.046 1.011-.046 1.68v1.933c-.603.115-1.135.332-1.573.764-.516.508-.733 1.145-.832 1.874-.095.695-.095 1.573-.095 2.641v2.654c0 1.068 0 1.946.095 2.64.1.73.316 1.367.832 1.875.514.507 1.156.718 1.891.815.703.093 1.593.093 2.68.093h.502V22a.75.75 0 0 0 1.5 0v-1.25h.503c1.086 0 1.976 0 2.679-.093.735-.097 1.377-.308 1.891-.815.516-.508.733-1.145.832-1.874.095-.695.095-1.573.095-2.641v-2.654c0-1.068 0-1.946-.095-2.64-.1-.73-.316-1.367-.832-1.875-.439-.432-.97-.65-1.573-.764V5.462c0-.67 0-1.229-.046-1.681-.048-.473-.153-.913-.418-1.309a2.75 2.75 0 0 0-.758-.759c-.396-.264-.835-.369-1.309-.417-.452-.046-1.011-.046-1.68-.046h-.077Zm2.788 6.012V5.5c0-.718 0-1.2-.038-1.567-.036-.355-.1-.519-.173-.627a1.25 1.25 0 0 0-.345-.345c-.108-.073-.272-.137-.627-.173-.367-.037-.85-.038-1.567-.038-.718 0-1.2 0-1.567.038-.355.036-.519.1-.627.173a1.25 1.25 0 0 0-.345.345c-.073.108-.137.272-.173.627-.037.367-.038.85-.038 1.567v1.762c.45-.012.948-.012 1.497-.012h2.506c.549 0 1.047 0 1.497.012Zm.985 11.908c-.593.078-1.383.08-2.535.08h-2.4c-1.152 0-1.942-.002-2.535-.08-.572-.076-.847-.211-1.036-.397-.187-.184-.322-.45-.398-1.008-.08-.581-.081-1.357-.081-2.492v-2.546c0-1.136.002-1.91.081-2.492.076-.558.211-.824.398-1.008.189-.186.464-.321 1.036-.397.593-.078 1.383-.08 2.535-.08h2.4c1.152 0 1.942.002 2.535.08.573.076.847.211 1.036.397.187.184.322.45.398 1.008.08.581.081 1.357.081 2.492v2.546c0 1.136-.002 1.91-.081 2.492-.076.558-.211.824-.398 1.008-.189.186-.463.321-1.036.397Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8Zm1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12l.6-.8ZM10.733 7c-.854 0-1.601 0-2.233.048V5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2c1.405 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v1.548C14.868 7 14.121 7 13.267 7h-2.534ZM11 3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h.45v2a.75.75 0 0 0 1.5 0v-2h.45c2.263 0 3.394 0 4.097-.692C18 18.615 18 17.5 18 15.273v-2.546c0-2.228 0-3.342-.703-4.035C16.594 8 15.463 8 13.2 8Zm-.75 3.4a.75.75 0 0 1 .15 1.05l-.6.8h1.5a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 1 1-1.2-.9l.6-.8h-1.5a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.05-.15Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12.5 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8Zm1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12l.6-.8Z" fill="currentColor" /><path d="M10.25 4.75A.75.75 0 0 1 11 4h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8Zm1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12l.6-.8Z" fill="currentColor" /><path opacity={0.5} d="M8.5 5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2c1.405 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v2.55C14.898 8 14.148 8 13.2 8h-2.4c-.948 0-1.697 0-2.3.05V5.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Lightning