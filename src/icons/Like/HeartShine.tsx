import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HeartShine = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v2M12 20v2M2 12h2M20 12h2M6 18l.343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m10.785 15.354-.47.585.47-.585ZM7.25 11.38a.75.75 0 0 0 1.5 0h-1.5ZM12 9.9l-.545.516a.75.75 0 0 0 1.09 0L12 9.9Zm1.215 5.453.47.585-.47-.585Zm-2.924-1.352a.75.75 0 0 0-.963 1.15l.963-1.15ZM8.75 11.38c0-.715.397-1.284.891-1.514.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88-1.056.49-1.759 1.611-1.759 2.874h1.5Zm1.566 4.56c.2.16.444.355.7.507.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a4.977 4.977 0 0 1-.527-.388l-.938 1.17Zm3.368 0c.545-.437 1.323-.998 1.93-1.692.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881-.492.563-1.105 1-1.738 1.508l.938 1.17Zm3.066-4.56c0-1.263-.703-2.384-1.759-2.874-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55.494.23.891.799.891 1.514h1.5Zm-4.004 3.389c-.214.172-.378.3-.527.388-.15.089-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303.255-.152.499-.347.7-.508l-.939-1.17Zm-1.492 0c-.335-.268-.638-.495-.963-.767l-.963 1.15c.335.28.707.562.988.787l.938-1.17Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 18 .343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m10.785 15.354.469-.585-.47.585ZM12 9.9l-.545.516a.75.75 0 0 0 1.09 0L12 9.9Zm1.215 5.453.47.585-.47-.585Zm-1.961-.585c-.633-.507-1.246-.945-1.738-1.508-.466-.533-.766-1.123-.766-1.881h-1.5c0 1.218.504 2.144 1.136 2.868.607.694 1.385 1.255 1.93 1.691l.938-1.17Zm-2.504-3.39c0-.714.397-1.283.891-1.513.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88-1.056.49-1.759 1.611-1.759 2.874h1.5Zm1.566 4.56c.2.16.444.356.7.508.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a4.977 4.977 0 0 1-.527-.388l-.938 1.17Zm3.368 0c.545-.436 1.323-.997 1.93-1.691.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881-.492.563-1.105 1-1.738 1.508l.938 1.17Zm3.066-4.56c0-1.262-.703-2.383-1.759-2.873-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55.494.23.891.799.891 1.514h1.5Zm-4.004 3.39c-.214.172-.378.3-.527.388-.15.089-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303.255-.152.499-.347.7-.508l-.939-1.17Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.785 15.354.469-.585-.47.585ZM12 9.9l-.545.516a.75.75 0 0 0 1.09 0L12 9.9Zm1.215 5.453.47.585-.47-.585Zm-1.961-.585c-.633-.507-1.246-.945-1.738-1.508-.466-.533-.766-1.123-.766-1.881h-1.5c0 1.218.504 2.144 1.136 2.868.607.694 1.385 1.255 1.93 1.691l.938-1.17Zm-2.504-3.39c0-.714.397-1.283.891-1.513.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88-1.056.49-1.759 1.611-1.759 2.874h1.5Zm1.566 4.56c.2.16.444.356.7.508.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a4.977 4.977 0 0 1-.527-.388l-.938 1.17Zm3.368 0c.545-.436 1.323-.997 1.93-1.691.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881-.492.563-1.105 1-1.738 1.508l.938 1.17Zm3.066-4.56c0-1.262-.703-2.383-1.759-2.873-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55.494.23.891.799.891 1.514h1.5Zm-4.004 3.39c-.214.172-.378.3-.527.388-.15.089-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303.255-.152.499-.347.7-.508l-.939-1.17Z" fill="currentColor" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M6 18l.343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 8.899c-.971-.724-2.063-.825-2.991-.393-1.056.49-1.759 1.611-1.759 2.874 0 1.218.504 2.144 1.136 2.868.498.57 1.111 1.049 1.616 1.444l.314.247c.2.16.444.356.7.508.253.15.59.303.984.303.393 0 .731-.153.985-.303.255-.152.499-.347.7-.508.097-.078.203-.16.313-.247.505-.395 1.118-.875 1.616-1.444.632-.723 1.136-1.65 1.136-2.868 0-1.263-.703-2.384-1.759-2.874-.928-.432-2.02-.33-2.991.393Zm-2.359.967c-.494.23-.891.799-.891 1.514 0 .758.3 1.348.766 1.881.394.452.867.823 1.366 1.214l.372.294c.214.172.378.3.527.388.15.089.212.093.219.093.007 0 .069-.004.219-.093s.313-.216.527-.388l.372-.294c.499-.391.972-.762 1.366-1.214.466-.533.766-1.123.766-1.881 0-.715-.397-1.284-.891-1.514-.444-.206-1.105-.199-1.814.55a.75.75 0 0 1-1.09 0c-.709-.749-1.37-.756-1.814-.55Z" fill="currentColor" /><path d="M12.75 20a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM20 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM5.47 18.53a.75.75 0 0 1 0-1.06l.343-.343a.75.75 0 1 1 1.06 1.06l-.343.343a.75.75 0 0 1-1.06 0ZM17.126 5.813a.75.75 0 1 0 1.061 1.06l.343-.343a.75.75 0 0 0-1.06-1.06l-.344.343ZM18.53 18.53a.75.75 0 0 0 0-1.06l-.343-.343a.75.75 0 0 0-1.06 1.06l.343.343a.75.75 0 0 0 1.06 0ZM6.874 5.813a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 1.06-1.06l.344.343Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06Zm13.06 0a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0Zm10.254 0a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11 0-2.543-2.75-4.346-5-1.902-2.25-2.444-5-.64-5 1.902Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.8} fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06ZM18.53 5.47a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0ZM6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0ZM17.127 17.127a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06Z" /></g><path d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11 0-2.543-2.75-4.346-5-1.902-2.25-2.444-5-.64-5 1.902Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HeartShine