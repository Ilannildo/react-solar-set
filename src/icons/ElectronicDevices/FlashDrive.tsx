import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const FlashDrive = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.83 10.441.535.526-.535-.526Zm-2.069 1.033a.75.75 0 1 0 1.07 1.052l-1.07-1.052Zm2.07-7.27-.535.527.534-.526ZM22 7.324h.75H22Zm-8.307-3.118.535.526-.535-.526ZM16.762 2v.75V2Zm-5.297 3.4a.75.75 0 0 0 1.07 1.051L11.465 5.4Zm7.83 4.515-1.534 1.559 1.07 1.052 1.534-1.559-1.07-1.052Zm0-5.184c.739.75 1.238 1.26 1.563 1.692.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8-.398-.532-.984-1.124-1.692-1.844l-1.07 1.052Zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9-.325.432-.824.942-1.562 1.692l1.069 1.052Zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708-.523.406-1.106 1.001-1.814 1.72l1.069 1.053Zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394.425.33.926.837 1.665 1.587l1.069-1.052Zm-7.206 0-1.694 1.72 1.07 1.052 1.693-1.72-1.07-1.052Z" fill="currentColor" /><path d="M9.857 22v.75V22Zm4.84-4.552a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm3.785-4.073h.75-.75ZM6.022 8.772l.53.53-.53-.53Zm-.767.767-.53-.53.53.53Zm7.213 12.116a.75.75 0 1 0-.936-1.172l.936 1.172ZM5.785 10.07l.767-.767-1.06-1.061-.768.767 1.061 1.06Zm-1.06 9.205c1.07 1.07 1.924 1.927 2.684 2.507.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66-.661-.505-1.434-1.276-2.534-2.375l-1.06 1.06Zm9.972-9.972c1.1 1.1 1.87 1.872 2.375 2.534.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448-.58-.76-1.437-1.615-2.507-2.685l-1.06 1.06Zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538-.505.662-1.275 1.435-2.375 2.535l1.06 1.06ZM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967-.76.58-1.615 1.437-2.685 2.507l1.061 1.06Zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66.662.504 1.434 1.275 2.534 2.375l1.06-1.061Zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538.505-.662 1.275-1.434 2.375-2.534l-1.06-1.06Zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448.58.76 1.437 1.615 2.507 2.685l1.061-1.06Zm5.747 2.268c-.719.575-1.2.767-1.675.767v1.5c.968 0 1.777-.428 2.611-1.095l-.936-1.172ZM5.785 13.612a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.542 5.664a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-4.603-4.603 4.603 4.603 1.06-1.06-4.602-4.604-1.06 1.06Z" fill="currentColor" /><path d="m18.718 7.403-.708.707M16.596 5.282l-.707.707" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m14.46 18.745.53.53-.53-.53Zm.767-.767-.53-.53.53.53Zm3.255-4.603h.75-.75ZM6.022 8.772l.53.53-.53-.53Zm4.603-3.254v.75-.75Zm-5.37 4.021-.53-.53.53.53ZM2 14.142h-.75H2Zm3.785-4.072.767-.767-1.06-1.061-.768.767 1.061 1.06Zm8.912 7.378-.767.767 1.06 1.06.768-.767-1.06-1.06Zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968.76-.58 1.615-1.437 2.685-2.507l-1.061-1.06Zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66-.661-.505-1.434-1.276-2.534-2.375l-1.06 1.06Zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448-.58-.76-1.437-1.615-2.507-2.685l-1.06 1.06Zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538-.505.662-1.275 1.435-2.375 2.535l1.06 1.06ZM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967-.76.58-1.615 1.437-2.685 2.507l1.061 1.06Zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66.662.504 1.434 1.275 2.534 2.375l1.06-1.061Zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538.505-.662 1.275-1.434 2.375-2.534l-1.06-1.06Zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448.58.76 1.437 1.615 2.507 2.685l1.061-1.06Z" fill="currentColor" /><path opacity={0.5} d="M5.785 13.612a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.542 5.664a.75.75 0 1 0 1.061-1.06l-1.06 1.06Zm-4.602-4.603 4.602 4.603 1.061-1.06-4.603-4.604-1.06 1.06Z" fill="currentColor" /><path d="m19.83 10.441.535.526-.535-.526Zm-2.069 1.033a.75.75 0 1 0 1.07 1.052l-1.07-1.052Zm2.07-7.27-.535.527.534-.526ZM22 7.324h.75H22Zm-8.307-3.118.535.526-.535-.526ZM16.762 2v.75V2Zm-5.297 3.4a.75.75 0 0 0 1.07 1.051L11.465 5.4Zm7.83 4.515-1.534 1.559 1.07 1.052 1.534-1.559-1.07-1.052Zm0-5.184c.739.75 1.238 1.26 1.563 1.692.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8-.398-.532-.984-1.124-1.692-1.844l-1.07 1.052Zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9-.325.432-.824.942-1.562 1.692l1.069 1.052Zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708-.523.406-1.106 1.001-1.814 1.72l1.069 1.053Zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394.425.33.926.837 1.665 1.587l1.069-1.052Zm-7.206 0-1.694 1.72 1.07 1.052 1.693-1.72-1.07-1.052Z" fill="currentColor" /><path d="m14.46 18.745.53.53-.53-.53Zm.767-.767-.53-.53.53.53Zm3.255-4.603h.75-.75ZM6.022 8.772l.53.53-.53-.53Zm-.767.767-.53-.53.53.53Zm.53.53.767-.766-1.06-1.061-.768.767 1.061 1.06Zm8.912 7.379-.767.767 1.06 1.06.768-.767-1.06-1.06Zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968.76-.58 1.615-1.437 2.685-2.507l-1.061-1.06Zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66-.661-.505-1.434-1.276-2.534-2.375l-1.06 1.06Zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448-.58-.76-1.437-1.615-2.507-2.685l-1.06 1.06Zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538-.505.662-1.275 1.435-2.375 2.535l1.06 1.06ZM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967-.76.58-1.615 1.437-2.685 2.507l1.061 1.06Zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66.662.504 1.434 1.275 2.534 2.375l1.06-1.061Zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538.505-.662 1.275-1.434 2.375-2.534l-1.06-1.06Zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448.58.76 1.437 1.615 2.507 2.685l1.061-1.06Z" fill="currentColor" /><path opacity={0.5} d="m18.717 7.403-.707.707M16.596 5.282l-.707.707" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m14.46 18.745.53.53-.53-.53Zm.767-.767-.53-.53.53.53Zm3.255-4.603h.75-.75ZM6.022 8.772l.53.53-.53-.53Zm4.603-3.254v.75-.75Zm-5.37 4.021-.53-.53.53.53ZM2 14.142h-.75H2Zm3.785-.53a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.542 5.663a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5.785 10.07l.767-.767-1.06-1.061-.768.767 1.061 1.06Zm8.912 7.378-.767.767 1.06 1.06.768-.767-1.06-1.06Zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968.76-.58 1.615-1.437 2.685-2.507l-1.061-1.06Zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66-.661-.505-1.434-1.276-2.534-2.375l-1.06 1.06Zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448-.58-.76-1.437-1.615-2.507-2.685l-1.06 1.06Zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538-.505.662-1.275 1.435-2.375 2.535l1.06 1.06ZM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967-.76.58-1.615 1.437-2.685 2.507l1.061 1.06Zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66.662.504 1.434 1.275 2.534 2.375l1.06-1.061Zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538.505-.662 1.275-1.434 2.375-2.534l-1.06-1.06Zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448.58.76 1.437 1.615 2.507 2.685l1.061-1.06Zm-1.06-3.543 4.602 4.603 1.06-1.06-4.602-4.603-1.06 1.06Z" fill="currentColor" /><path d="m19.83 10.441.535.526-.535-.526Zm-2.069 1.033a.75.75 0 1 0 1.07 1.052l-1.07-1.052Zm2.07-7.27-.535.527.534-.526ZM22 7.324h.75H22Zm-8.307-3.118.535.526-.535-.526ZM16.762 2v.75V2Zm-5.297 3.4a.75.75 0 0 0 1.07 1.051L11.465 5.4Zm7.83 4.515-1.534 1.559 1.07 1.052 1.534-1.559-1.07-1.052Zm0-5.184c.739.75 1.238 1.26 1.563 1.692.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8-.398-.532-.984-1.124-1.692-1.844l-1.07 1.052Zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9-.325.432-.824.942-1.562 1.692l1.069 1.052Zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708-.523.406-1.106 1.001-1.814 1.72l1.069 1.053Zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394.425.33.926.837 1.665 1.587l1.069-1.052Zm-7.206 0-1.694 1.72 1.07 1.052 1.693-1.72-1.07-1.052Z" fill="currentColor" /><path d="m14.46 18.745.53.53-.53-.53Zm.767-.767-.53-.53.53.53Zm3.255-4.603h.75-.75ZM6.022 8.772l.53.53-.53-.53Zm-.767.767-.53-.53.53.53Zm.53 4.073a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.542 5.663a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5.785 10.07l.767-.767-1.06-1.061-.768.767 1.061 1.06Zm8.912 7.378-.767.767 1.06 1.06.768-.767-1.06-1.06Zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968.76-.58 1.615-1.437 2.685-2.507l-1.061-1.06Zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66-.661-.505-1.434-1.276-2.534-2.375l-1.06 1.06Zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448-.58-.76-1.437-1.615-2.507-2.685l-1.06 1.06Zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538-.505.662-1.275 1.435-2.375 2.535l1.06 1.06ZM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967-.76.58-1.615 1.437-2.685 2.507l1.061 1.06Zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66.662.504 1.434 1.275 2.534 2.375l1.06-1.061Zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538.505-.662 1.275-1.434 2.375-2.534l-1.06-1.06Zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448.58.76 1.437 1.615 2.507 2.685l1.061-1.06Zm-1.06-3.543 4.602 4.603 1.06-1.06-4.602-4.603-1.06 1.06Z" fill="currentColor" /><path d="m18.717 7.403-.707.707M16.596 5.282l-.707.707" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.892 3.144c-.425.33-.926.837-1.664 1.587l-1.06 1.077c.727.571 1.543 1.387 2.55 2.395l.079.078c1.052 1.052 1.895 1.895 2.468 2.646l.015.02 1.016-1.032c.738-.75 1.237-1.26 1.562-1.692.31-.414.392-.67.392-.9 0-.23-.081-.486-.392-.9-.325-.432-.824-.942-1.562-1.692-.739-.75-1.24-1.258-1.665-1.587-.408-.316-.654-.394-.87-.394-.215 0-.46.078-.869.394Zm3.156 9.161 1.354-1.375c.691-.703 1.263-1.285 1.655-1.806.412-.55.693-1.118.693-1.801 0-.683-.28-1.252-.693-1.8-.392-.523-.964-1.104-1.655-1.807l-.075-.075c-.691-.703-1.263-1.284-1.777-1.683-.54-.418-1.105-.708-1.788-.708-.684 0-1.249.29-1.789.708-.514.399-1.086.98-1.777 1.683L11.849 5.01a3.24 3.24 0 0 0-1.224-.242c-.904 0-1.67.374-2.449.967-.75.573-1.594 1.416-2.645 2.468l-.846.846C3.634 10.1 2.79 10.943 2.217 11.694c-.593.778-.967 1.545-.967 2.449 0 .903.374 1.67.967 2.448.573.75 1.417 1.594 2.468 2.646l.078.078c1.052 1.051 1.895 1.895 2.646 2.468.778.593 1.544.967 2.448.967.905 0 1.671-.374 2.449-.967.75-.573 1.594-1.417 2.646-2.468l.845-.846c1.052-1.051 1.895-1.894 2.468-2.645.593-.778.967-1.545.967-2.449 0-.377-.065-.73-.184-1.07Zm-7.504-5.784c-.343-.183-.633-.253-.92-.253-.444 0-.893.168-1.538.66-.661.505-1.434 1.275-2.534 2.375l-.767.767c-1.1 1.1-1.87 1.873-2.375 2.534-.492.645-.66 1.094-.66 1.539 0 .444.168.894.66 1.538.505.662 1.275 1.434 2.375 2.534 1.1 1.1 1.873 1.87 2.534 2.375.644.492 1.094.66 1.538.66.445 0 .895-.168 1.539-.66.661-.505 1.434-1.275 2.534-2.375l.767-.767c1.1-1.1 1.87-1.873 2.375-2.534.492-.644.66-1.094.66-1.539 0-.444-.168-.894-.66-1.538-.505-.662-1.275-1.434-2.375-2.534-1.1-1.1-1.872-1.87-2.534-2.375a5.23 5.23 0 0 0-.444-.307.746.746 0 0 1-.175-.1Zm5.582-1.769a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0Zm2.122 2.121a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.061-1.06l.707-.708a.75.75 0 0 1 1.06 0Zm-14.524 6.74a.75.75 0 0 1 1.061 0l4.603 4.602a.75.75 0 0 1-1.06 1.06l-4.604-4.602a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m5.255 9.54.767-.767c2.17-2.17 3.254-3.255 4.603-3.255.201 0 .397.024.59.073 1.106.275 2.167 1.336 4.012 3.18v.002h.001c1.58 1.58 2.585 2.585 3.014 3.535.16.355.24.701.24 1.067 0 1.348-1.085 2.433-3.255 4.603l-.767.767C12.29 20.915 11.206 22 9.857 22c-1.348 0-2.433-1.085-4.602-3.255C3.085 16.575 2 15.491 2 14.142c0-1.348 1.085-2.432 3.255-4.602Zm-.53 4.072a.75.75 0 0 1 1.06 0l4.603 4.603a.75.75 0 0 1-1.06 1.06l-4.603-4.602a.75.75 0 0 1 0-1.06ZM19.83 4.17C21.277 5.616 22 6.34 22 7.238c0 .9-.723 1.622-2.17 3.069l-.635.636a7.842 7.842 0 0 0-.334-.47c-.604-.792-1.478-1.666-2.502-2.69l-.142-.142c-1.024-1.024-1.898-1.898-2.69-2.502a7.817 7.817 0 0 0-.47-.333l.636-.636C15.14 2.723 15.863 2 16.762 2c.898 0 1.622.723 3.068 2.17Zm-.209 2.33a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM17.5 4.379a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.706-.707a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M19.83 10.441 18.296 12l-.11.11-.09-.088c-.49-.87-1.446-1.827-2.869-3.25-1.408-1.407-2.359-2.359-3.221-2.853l1.687-1.714C15.139 2.735 15.863 2 16.76 2c.9 0 1.623.735 3.069 2.205C21.277 5.675 22 6.41 22 7.323c0 .913-.724 1.648-2.17 3.118Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 14.142c0 1.348 1.085 2.433 3.255 4.603S8.509 22 9.857 22c1.349 0 2.434-1.085 4.603-3.255l.767-.767c2.17-2.17 3.255-3.255 3.255-4.603 0-1.348-1.085-2.433-3.255-4.603s-3.254-3.254-4.602-3.254c-1.349 0-2.433 1.084-4.603 3.254l-.767.767C3.085 11.71 2 12.794 2 14.142Zm3.785-.53a.75.75 0 0 0-1.06 1.06l4.602 4.604a.75.75 0 1 0 1.061-1.06l-4.603-4.604ZM19.247 6.873a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0ZM17.126 4.752a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FlashDrive