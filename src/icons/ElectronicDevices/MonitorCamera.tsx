import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MonitorCamera = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5c0 1.414 0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5ZM19 3.75l1.615-.673c.627-.261.94-.392 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166-.222.148-.535.018-1.162-.243L19 6.25v-2.5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16 22H8M12 17v5M22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1m7.5-8c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.505.616-.73 1.398-.829 2.538M22 13h-6M2 13h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5c0 1.414 0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5ZM19 3.75l1.615-.673c.627-.261.94-.391 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166-.222.148-.535.018-1.162-.243L19 6.25v-2.5Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16 22H8m4-5v5M22 13H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5c0 1.414 0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5ZM19 3.75l1.615-.673c.627-.261.94-.392 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166-.222.148-.535.018-1.162-.243L19 6.25v-2.5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16 22H8M12 17v5M22 13H2M22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.95 1.25h1.1c.664 0 1.237 0 1.696.062.492.066.963.215 1.345.597.236.236.383.505.476.792l.76-.316.041-.017c.277-.116.557-.233.796-.293.265-.067.657-.113 1.03.135.372.248.48.628.52.899.036.244.036.546.036.847v2.088c0 .3 0 .604-.036.848-.04.27-.148.65-.52.898-.373.248-.765.202-1.03.135a6.202 6.202 0 0 1-.796-.293c-.014-.005-.027-.01-.041-.017l-.76-.316c-.093.287-.24.556-.476.792-.382.382-.854.531-1.345.597-.459.062-1.032.062-1.697.062h-1.098c-.665 0-1.238 0-1.697-.062-.492-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-.098c0-.665 0-1.238.062-1.697.066-.491.215-.963.597-1.345s.853-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062Zm4.8 4.5 1.154.48c.135.057.247.103.344.142.002-.105.002-.226.002-.372V4c0-.146 0-.267-.002-.372-.098.039-.21.085-.344.141l-1.154.481v1.5ZM18.25 5c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484-.057-.057-.159-.128-.484-.172-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484-.046.347-.048.818-.048 1.546 0 .728.002 1.2.048 1.546.044.325.115.427.172.484.057.057.159.128.484.172.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048.325-.044.427-.115.484-.172.057-.057.128-.159.172-.484.046-.347.048-.818.048-1.546ZM9.451 1.25H9.5a.75.75 0 1 1 0 1.5c-1.662 0-2.843.001-3.749.108-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749V11c0 .459 0 .874.004 1.25h18.492c.004-.376.004-.791.004-1.25v-1a.75.75 0 0 1 1.5 0v1.055c0 .662 0 1.263-.013 1.804a.751.751 0 0 1-.01.327c-.017.444-.045.845-.093 1.206-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116H12.75v3.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-3.5H7.945c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.049-.36-.077-.762-.094-1.206a.751.751 0 0 1-.01-.327c-.013-.541-.013-1.142-.013-1.804V9.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 1.25 7.85 1.25 9.451 1.25Zm-6.644 12.5c.012.156.028.303.046.442.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.019-.138.034-.285.046-.441H2.807Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5c0 1.414 0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2ZM8 17c-2.828 0-4.243 0-5.121-.879-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4H8Z" fill="currentColor" /><path d="M22 10v1c0 .552 0 1.05-.006 1.5H2.007C2 12.05 2 11.552 2 11v-1c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764.078.575.266 1.23.81 1.775.546.545 1.201.733 1.776.81.51.07 1.128.07 1.764.069H16.082c.636 0 1.254 0 1.764-.068.575-.078 1.23-.266 1.775-.81a2.61 2.61 0 0 0 .302-.362l.116.048.056.023c.26.109.59.246.885.321.233.06.606.122 1.018.027C22 9.092 22 9.531 22 10Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5c0 1.414 0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2ZM7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.751.751 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4H7.985Z" fill="currentColor" /><path opacity={0.5} d="M22 10v1c0 .552-.006 1.55-.013 2H2c-.007-.45 0-1.448 0-2v-1c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764.078.575.266 1.23.81 1.775.545.545 1.201.733 1.776.81.51.07 1.128.07 1.764.069H16.082c.636 0 1.254 0 1.764-.068.575-.078 1.23-.266 1.775-.81.116-.117.216-.238.302-.362l.115.048.057.023c.26.109.59.246.885.321.233.06.606.122 1.018.027C22 9.092 22 9.531 22 10Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MonitorCamera