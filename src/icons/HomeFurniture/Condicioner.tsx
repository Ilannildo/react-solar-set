import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Condicioner = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.429 2c2.414 0 3.62 0 4.442.655.175.14.334.299.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923-.186.234-.399.447-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571c0-2.414 0-3.62.655-4.441.14-.176.299-.335.475-.475C3.95 2 5.157 2 7.57 2H12M7 17.5l-.307.46A1.321 1.321 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5-.306.46c-.39.584-.255 1.37.306 1.79.561.42.696 1.206.307 1.79L12 22m5-4.5-.306.46c-.39.584-.255 1.37.306 1.79.561.42.696 1.206.307 1.79L17 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M18 14.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265M6 8.5h2m10 0h-6M6 6h6m6 0h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 7.571c0-2.414 0-3.62.655-4.441.14-.176.299-.335.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655.175.14.334.299.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923-.186.234-.399.447-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m7 17.5-.307.46A1.321 1.321 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5-.306.46c-.39.584-.255 1.37.306 1.79.561.42.696 1.206.307 1.79L12 22m5-4.5-.306.46c-.39.584-.255 1.37.306 1.79.561.42.696 1.206.307 1.79L17 22M18 14.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 8.5h12M6 6h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 7.571c0-2.414 0-3.62.655-4.441.14-.176.299-.335.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655.175.14.334.299.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923-.186.234-.399.447-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571Z" stroke="currentColor" strokeWidth={1.5} /><path d="m7 17.5-.307.46A1.321 1.321 0 0 0 7 19.75c.56.42.695 1.206.306 1.79L7 22m5-4.5-.307.46A1.321 1.321 0 0 0 12 19.75c.56.42.695 1.206.306 1.79L12 22m5-4.5-.307.46A1.321 1.321 0 0 0 17 19.75c.56.42.695 1.206.306 1.79L17 22M18 14.5c0-.465 0-.697-.039-.89a2 2 0 0 0-1.571-1.572C16.197 12 15.964 12 15.5 12H9c-.932 0-1.398 0-1.766.152a2 2 0 0 0-1.082 1.083c-.122.295-.146.653-.151 1.265M6 8.5h12M6 6h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.25 8.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 5.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.525 1.25h8.95c1.168 0 2.109 0 2.858.087.776.09 1.44.28 2.005.731.22.175.419.374.594.594.45.565.641 1.23.731 2.005.087.749.087 1.69.087 2.858v.094c0 1.57 0 2.812-.114 3.797-.117 1.01-.363 1.844-.922 2.546-.222.278-.474.53-.752.752-.702.56-1.536.805-2.546.922-.985.114-2.228.114-3.797.114H9.381c-1.57 0-2.812 0-3.797-.114-1.01-.117-1.844-.363-2.546-.922a4.75 4.75 0 0 1-.752-.752c-.56-.702-.805-1.536-.922-2.546-.114-.985-.114-2.228-.114-3.797v-.094c0-1.168 0-2.109.087-2.858.09-.776.28-1.44.731-2.005a3.75 3.75 0 0 1 .594-.594c.565-.45 1.23-.641 2.005-.731.749-.087 1.69-.087 2.858-.087ZM4.839 2.827c-.637.074-.986.21-1.242.414a2.25 2.25 0 0 0-.356.356c-.204.256-.34.605-.414 1.242-.076.653-.077 1.507-.077 2.732 0 1.628.001 2.784.104 3.672.101.872.292 1.39.605 1.783.152.19.324.363.515.515.311.248.702.42 1.285.53.015-.414.06-.784.2-1.123a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188.305-.021.676-.021 1.12-.021h6.6c.392 0 .695 0 .962.053a2.75 2.75 0 0 1 2.161 2.16c.036.181.047.378.051.607.58-.11.968-.282 1.278-.529.19-.152.363-.324.515-.515.313-.392.504-.91.605-1.783.103-.888.104-2.044.104-3.672 0-1.225-.001-2.079-.077-2.732-.074-.637-.21-.986-.414-1.242a2.248 2.248 0 0 0-.356-.356c-.256-.204-.605-.34-1.242-.414-.653-.076-1.507-.077-2.732-.077H7.57c-1.225 0-2.079.001-2.732.077Zm12.41 11.392c-.002-.28-.007-.383-.023-.463a1.25 1.25 0 0 0-.982-.982c-.103-.02-.244-.024-.744-.024H9c-.476 0-.796 0-1.043.017-.241.017-.358.046-.436.078a1.25 1.25 0 0 0-.676.677c-.048.115-.078.282-.09.697.724.03 1.595.031 2.674.031h5.142c1.08 0 1.954 0 2.678-.031Z" fill="currentColor" /><path d="M7.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.891.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208ZM12.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.891.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208ZM17.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.891.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.231.231 0 0 0 .043.267c.527.527.658 1.332.324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.231.231 0 0 0-.044-.267 1.731 1.731 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336ZM17.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.231.231 0 0 0 .043.267c.527.527.658 1.332.324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.231.231 0 0 0-.044-.267 1.731 1.731 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336ZM12.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.892.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208ZM6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121-.53.531-1.258.742-2.374.825-.005-.67-.02-1.402-.059-1.692-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2Zm-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6Z" fill="currentColor" /><path d="M16 15H8c-.45 0-.865 0-1.247-.004.004-.648.016-1.322.045-1.542.044-.325.115-.427.172-.484.057-.057.159-.128.484-.172.347-.046.818-.048 1.546-.048h6c.728 0 1.2.002 1.546.048.325.044.427.115.484.172.057.057.128.159.172.484.03.22.04.894.045 1.542C16.865 15 16.45 15 16 15Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121-.53.531-1.258.742-2.374.825-.005-.67-.02-1.402-.059-1.692-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2Zm-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6Z" fill="currentColor" /><path opacity={0.5} d="M18.747 14.946H5.253c.005-.67.02-1.402.059-1.692.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h6.098c.665 0 1.238 0 1.697.062.492.066.963.215 1.345.597s.531.853.597 1.345c.04.29.054 1.023.059 1.692Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.231.231 0 0 0 .043.267c.527.527.658 1.332.324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.231.231 0 0 0-.044-.267 1.731 1.731 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336ZM17.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.231.231 0 0 0 .043.267c.527.527.658 1.332.324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.231.231 0 0 0-.044-.267 1.731 1.731 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336ZM12.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.892.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Condicioner