import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Cup = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 2.456c.741.141 1.181.297 1.56.765.477.586.452 1.219.401 2.485-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485.476-.586 1.045-.682 2.184-.874A26.374 26.374 0 0 1 12 2c.718 0 1.386.025 2 .068" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m19 5 .949.316c.99.33 1.485.495 1.768.888.283.393.283.915.283 1.958v.073c0 .86 0 1.291-.207 1.643-.207.352-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888C2 6.597 2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643.207.352.584.561 1.336.98L6.5 12.5" stroke="currentColor" strokeWidth={1.5} /><path d="M12 17v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m8.5 22-.735-.147a.75.75 0 0 0 .735.897V22Zm7 0v.75a.75.75 0 0 0 .735-.897L15.5 22Zm-.34-1.696.736-.147-.735.147Zm-6.32 0-.736-.147.735.147ZM8.5 22.75h7v-1.5h-7v1.5Zm7.735-.897-.339-1.696-1.47.294.339 1.696 1.47-.294ZM14.18 18.75H9.82v1.5h4.36v-1.5Zm-6.076 1.407-.34 1.696 1.471.294.34-1.696-1.471-.294ZM9.82 18.75a1.75 1.75 0 0 0-1.716 1.407l1.47.294a.25.25 0 0 1 .246-.201v-1.5Zm6.076 1.407a1.75 1.75 0 0 0-1.716-1.407v1.5a.25.25 0 0 1 .245.201l1.471-.294Z" fill="currentColor" /><path d="M18 22.75a.75.75 0 0 0 0-1.5v1.5Zm-12-1.5a.75.75 0 0 0 0 1.5v-1.5Zm0 1.5h12v-1.5H6v1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874.476.586.45 1.219.4 2.485-.18 4.553-1.2 10.294-6.96 10.294Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m19 5 .949.316c.99.33 1.485.495 1.768.888.283.393.283.915.283 1.958v.073c0 .86 0 1.291-.207 1.643-.207.352-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888C2 6.597 2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643.207.352.584.561 1.336.98L6.5 12.5" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 17v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m8.5 22-.735-.147a.75.75 0 0 0 .735.897V22Zm7 0v.75a.75.75 0 0 0 .735-.897L15.5 22Zm-.34-1.696.736-.147-.735.147Zm-6.32 0-.736-.147.735.147ZM8.5 22.75h7v-1.5h-7v1.5Zm7.735-.897-.339-1.696-1.47.294.339 1.696 1.47-.294ZM14.18 18.75H9.82v1.5h4.36v-1.5Zm-6.076 1.407-.34 1.696 1.471.294.34-1.696-1.471-.294ZM9.82 18.75a1.75 1.75 0 0 0-1.716 1.407l1.47.294a.25.25 0 0 1 .246-.201v-1.5Zm6.076 1.407a1.75 1.75 0 0 0-1.716-1.407v1.5a.25.25 0 0 1 .245.201l1.471-.294Z" fill="currentColor" /><path opacity={0.5} d="M18 22.75a.75.75 0 0 0 0-1.5v1.5Zm-12-1.5a.75.75 0 0 0 0 1.5v-1.5Zm0 1.5h12v-1.5H6v1.5Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874.476.586.45 1.219.4 2.485-.18 4.553-1.2 10.294-6.96 10.294Z" stroke="currentColor" strokeWidth={1.5} /><path d="m19 5 .949.316c.99.33 1.485.495 1.768.888.283.393.283.915.283 1.958v.073c0 .86 0 1.291-.207 1.643-.207.352-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888C2 6.597 2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643.207.352.584.561 1.336.98L6.5 12.5" stroke="currentColor" strokeWidth={1.5} /><path d="M12 17v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m8.5 22-.735-.147a.75.75 0 0 0 .735.897V22Zm7 0v.75a.75.75 0 0 0 .735-.897L15.5 22Zm-.34-1.696.736-.147-.735.147Zm-6.32 0-.736-.147.735.147ZM8.5 22.75h7v-1.5h-7v1.5Zm7.735-.897-.339-1.696-1.47.294.339 1.696 1.47-.294ZM14.18 18.75H9.82v1.5h4.36v-1.5Zm-6.076 1.407-.34 1.696 1.471.294.34-1.696-1.471-.294ZM9.82 18.75a1.75 1.75 0 0 0-1.716 1.407l1.47.294a.25.25 0 0 1 .246-.201v-1.5Zm6.076 1.407a1.75 1.75 0 0 0-1.716-1.407v1.5a.25.25 0 0 1 .245.201l1.471-.294Z" fill="currentColor" /><path d="M18 22.75a.75.75 0 0 0 0-1.5v1.5Zm-12-1.5a.75.75 0 0 0 0 1.5v-1.5Zm0 1.5h12v-1.5H6v1.5Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25c-1.828 0-3.339.161-4.502.357l-.134.023c-1.01.169-1.85.31-2.507 1.118-.42.519-.557 1.08-.588 1.705l-.492.164c-.463.154-.87.29-1.191.44-.348.162-.667.37-.911.709-.244.338-.341.707-.385 1.088-.04.353-.04.78-.04 1.269v.145c0 .402 0 .757.03 1.054.032.321.103.634.28.936.179.303.417.517.683.701.245.17.555.343.907.538l2.64 1.467c.54 1.061 1.281 2.007 2.3 2.69.887.596 1.952.97 3.213 1.069a.748.748 0 0 0-.053.277v1.75H9.82a1.75 1.75 0 0 0-1.716 1.407l-.219 1.093H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-1.885l-.219-1.093a1.75 1.75 0 0 0-1.716-1.407h-1.43V17a.748.748 0 0 0-.053-.277c1.261-.1 2.326-.473 3.213-1.068 1.02-.684 1.76-1.63 2.3-2.691l2.64-1.467c.352-.195.662-.368.907-.538.265-.184.504-.398.682-.7.178-.303.25-.616.281-.937.03-.297.03-.652.03-1.054v-.145c0-.488 0-.916-.04-1.269-.044-.381-.14-.75-.385-1.088-.244-.339-.563-.547-.91-.71-.323-.15-.729-.285-1.192-.439l-.492-.164c-.03-.626-.167-1.186-.588-1.705-.656-.809-1.496-.95-2.506-1.118l-.135-.023A27.122 27.122 0 0 0 12 1.25Zm2.585 20-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201l-.16.799h5.17ZM4.288 6.028l.014-.005c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475-.162-.113-.215-.18-.244-.23-.03-.05-.062-.128-.082-.324a10.58 10.58 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138.028-.238.072-.327.112-.381.039-.055.109-.125.326-.226.236-.11.56-.219 1.07-.39Zm15.41-.005c-.071 1.52-.243 3.2-.67 4.77l1.065-.591c.389-.217.633-.353.809-.475.162-.113.215-.18.244-.23.03-.05.062-.128.082-.324.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138-.028-.238-.072-.327-.112-.381-.039-.055-.109-.125-.326-.226-.236-.11-.56-.219-1.07-.39l-.014-.004ZM7.748 3.086A25.626 25.626 0 0 1 12 2.75c1.74 0 3.167.153 4.252.336 1.207.204 1.46.28 1.727.608.262.322.287.628.233 1.983-.09 2.258-.388 4.696-1.31 6.55-.456.914-1.052 1.662-1.827 2.182-.771.517-1.766.841-3.075.841-1.309 0-2.303-.324-3.074-.841-.776-.52-1.372-1.268-1.827-2.183-.923-1.853-1.22-4.29-1.31-6.55-.054-1.354-.03-1.66.233-1.982.266-.328.519-.404 1.726-.608Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 8.162v.073c0 .86 0 1.291-.207 1.643-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221.002-.052c.651.226 1.017.395 1.245.711.283.393.283.915.283 1.958ZM2 8.162v.073c0 .86 0 1.291.207 1.643.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.377 2.347A26.373 26.373 0 0 0 12 2c-1.783 0-3.253.157-4.377.347-1.139.192-1.708.288-2.184.874-.475.586-.45 1.219-.4 2.485.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26.05-1.266.076-1.9-.4-2.485-.476-.586-1.045-.682-2.184-.874Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874.476.586.45 1.219.4 2.485-.18 4.553-1.2 10.294-6.96 10.294Z" fill="currentColor" /><path d="m17.64 12.422 2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085c-.005.189-.013.395-.022.621-.088 2.225-.377 4.733-1.32 6.716ZM5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979C2 9.526 2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087c.005.188.013.394.022.62Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path opacity={0.5} d="M15.458 21.25H8.542l.297-1.75a1 1 0 0 1 .98-.804h4.361a1 1 0 0 1 .98.804l.298 1.75Z" fill="currentColor" /><path d="M12 16c-.26 0-.51-.011-.75-.034v2.73h1.5v-2.73A7.98 7.98 0 0 1 12 16Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cup