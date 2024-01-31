import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MultipleForwardLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.363 9.01-.498-.56.498.56Zm3.973-3.531.498.56-.498-.56Zm-3.973 9.51-.498.56.498-.56Zm3.973 3.53.498-.56-.498.56ZM13 8.572h-.75c0 .414.336.75.75.75v-.75Zm9 11.428-.664.349a.75.75 0 0 0 1.414-.349H22Zm-9-4.571v-.75a.75.75 0 0 0-.75.75H13Zm4.564-4.687a.75.75 0 0 0 .872-1.22l-.872 1.22Zm4.132 3.052a.75.75 0 0 0-1.392.56l1.392-.56ZM7.862 9.57l3.972-3.53-.996-1.122L6.865 8.45l.997 1.121Zm-.997 5.98 3.973 3.53.996-1.12-3.972-3.532-.997 1.121Zm6.885-6.98V6.227h-1.5v2.345h1.5Zm0 9.203v-2.345h-1.5v2.345h1.5Zm8.914 1.878c-.844-1.608-2.336-2.849-4.048-3.683A13.046 13.046 0 0 0 13 14.678v1.5c1.688 0 3.45.403 4.96 1.138 1.512.738 2.72 1.783 3.376 3.032l1.328-.697Zm-11.827-.57c.34.3.656.585.928.764.257.17.724.416 1.247.181l-.614-1.368c.228-.103.368.05.193-.065-.16-.105-.38-.299-.757-.634l-.996 1.121Zm1.413-1.308c0 .504-.002.797-.03.987-.029.207-.05 0 .178-.102l.614 1.368c.523-.235.65-.748.694-1.052.046-.323.044-.748.044-1.201h-1.5Zm-.416-11.734c.377-.335.598-.528.757-.634.175-.115.035.038-.193-.064l.614-1.369c-.523-.235-.99.012-1.247.181-.272.18-.588.464-.928.765l.997 1.121Zm1.916.187c0-.453.002-.879-.044-1.201-.044-.305-.17-.818-.694-1.053l-.614 1.369c-.228-.103-.207-.31-.177-.102.027.19.03.483.03.987h1.5ZM6.865 8.45c-.767.682-1.403 1.245-1.837 1.755-.448.527-.767 1.094-.767 1.795h1.5c0-.196.073-.427.409-.822.35-.412.89-.895 1.692-1.607l-.997-1.12Zm.997 5.98c-.801-.713-1.342-1.196-1.692-1.607-.336-.395-.41-.626-.41-.823h-1.5c0 .702.32 1.269.768 1.795.434.51 1.07 1.073 1.837 1.755l.997-1.12ZM13 9.32c1.423 0 3.102.375 4.564 1.42l.872-1.22c-1.765-1.263-3.768-1.7-5.436-1.7v1.5Zm7.304 5.033c.58 1.442.946 3.29.946 5.645h1.5c0-2.508-.389-4.553-1.054-6.206l-1.392.56Z" fill="currentColor" /><path d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.363 9.01-.498-.56.498.56Zm3.973-3.531.498.56-.498-.56Zm-3.973 9.51-.498.56.498-.56Zm3.973 3.53.498-.56-.498.56ZM13 8.572h-.75c0 .414.336.75.75.75v-.75Zm9 11.428-.664.349a.75.75 0 0 0 1.414-.349H22Zm-9-4.571v-.75a.75.75 0 0 0-.75.75H13ZM7.862 9.57l3.972-3.53-.996-1.122L6.865 8.45l.997 1.121Zm-.997 5.98 3.973 3.53.996-1.12-3.972-3.532-.997 1.121Zm6.885-6.98V6.227h-1.5v2.345h1.5Zm-.75.75c1.69 0 3.737.528 5.357 2.078 1.608 1.54 2.893 4.18 2.893 8.601h1.5c0-4.72-1.381-7.795-3.356-9.684C17.43 8.436 14.977 7.82 13 7.82v1.5Zm.75 8.453v-2.345h-1.5v2.345h1.5Zm8.914 1.878c-.844-1.608-2.336-2.849-4.048-3.683A13.046 13.046 0 0 0 13 14.678v1.5c1.688 0 3.45.403 4.96 1.138 1.512.738 2.72 1.783 3.376 3.032l1.328-.697Zm-11.827-.57c.34.3.656.585.928.764.257.17.724.416 1.247.181l-.614-1.368c.228-.103.368.05.193-.065-.16-.105-.38-.299-.757-.634l-.996 1.121Zm1.413-1.308c0 .504-.002.797-.03.987-.029.207-.05 0 .178-.102l.614 1.368c.523-.235.65-.748.694-1.052.046-.323.044-.748.044-1.201h-1.5Zm-.416-11.734c.377-.335.598-.528.757-.634.175-.115.035.038-.193-.064l.614-1.369c-.523-.235-.99.012-1.247.181-.272.18-.588.464-.928.765l.997 1.121Zm1.916.187c0-.453.002-.879-.044-1.201-.044-.305-.17-.818-.694-1.053l-.614 1.369c-.228-.103-.207-.31-.177-.102.027.19.03.483.03.987h1.5ZM6.865 8.45c-.767.682-1.403 1.245-1.837 1.755-.448.527-.767 1.094-.767 1.795h1.5c0-.196.073-.427.409-.822.35-.412.89-.895 1.692-1.607l-.997-1.12Zm.997 5.98c-.801-.713-1.342-1.196-1.692-1.607-.336-.395-.41-.626-.41-.823h-1.5c0 .702.32 1.269.768 1.795.434.51 1.07 1.073 1.837 1.755l.997-1.12Z" fill="currentColor" /><path opacity={0.5} d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.363 9.01-.498-.56.498.56Zm3.972-3.531.499.56-.498-.56Zm-3.972 9.51-.498.56.498-.56Zm3.972 3.53.499-.56-.498.56ZM13 8.572h-.75c0 .414.336.75.75.75v-.75Zm9 11.428-.664.349a.75.75 0 0 0 1.414-.349H22Zm-9-4.571v-.75a.75.75 0 0 0-.75.75H13ZM7.86 9.57l3.973-3.53-.997-1.122L6.865 8.45 7.86 9.57Zm-.996 5.98 3.972 3.53.997-1.12-3.973-3.532-.996 1.121Zm6.885-6.98V6.227h-1.5v2.345h1.5Zm-.75.75c1.69 0 3.736.528 5.356 2.078 1.609 1.54 2.894 4.18 2.894 8.601h1.5c0-4.72-1.381-7.795-3.357-9.684C17.43 8.436 14.977 7.82 13 7.82v1.5Zm.75 8.453v-2.345h-1.5v2.345h1.5Zm8.914 1.878c-.844-1.608-2.336-2.849-4.048-3.683A13.046 13.046 0 0 0 13 14.678v1.5c1.687 0 3.45.403 4.959 1.138 1.513.738 2.721 1.783 3.377 3.032l1.328-.697Zm-11.827-.57c.34.3.656.585.928.764.256.17.724.416 1.247.181l-.615-1.368c.229-.103.37.05.194-.065-.16-.105-.38-.299-.757-.634l-.997 1.121Zm1.413-1.308c0 .504-.002.797-.03.987-.03.207-.05 0 .177-.102l.615 1.368c.523-.235.65-.748.693-1.052.047-.323.045-.748.045-1.201h-1.5Zm-.416-11.734c.377-.335.597-.528.757-.634.175-.115.035.038-.194-.064l.615-1.369c-.523-.235-.99.012-1.247.181-.272.18-.589.464-.928.765l.997 1.121Zm1.916.187c0-.453.002-.879-.045-1.201-.044-.305-.17-.818-.693-1.053l-.615 1.369c-.228-.103-.206-.31-.176-.102.027.19.029.483.029.987h1.5ZM6.865 8.45c-.768.682-1.404 1.245-1.838 1.755-.448.527-.767 1.094-.767 1.795h1.5c0-.196.073-.427.41-.822.35-.412.89-.895 1.691-1.607l-.996-1.12Zm.996 5.98c-.8-.713-1.341-1.196-1.691-1.607-.337-.395-.41-.626-.41-.823h-1.5c0 .702.32 1.269.767 1.795.434.51 1.07 1.073 1.838 1.755l.996-1.12Z" fill="currentColor" /><path d="M8.462 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823l5.09 4.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.011 3.99a.75.75 0 0 1-.04 1.06L3.757 9.893a3.147 3.147 0 0 0 .101 4.703l5.09 4.333a.75.75 0 1 1-.972 1.142l-5.09-4.333a4.647 4.647 0 0 1-.15-6.944L7.951 3.95a.75.75 0 0 1 1.06.04Zm3.236 1.687c-.113.097-.248.216-.413.363L7.862 9.57c-.801.713-1.342 1.196-1.692 1.607-.336.396-.41.626-.41.823 0 .197.074.428.41.823.35.411.89.894 1.692 1.606l3.972 3.531c.165.147.3.266.413.363.003-.149.003-.33.003-.55V15.43a.75.75 0 0 1 .75-.75c1.913 0 3.9.454 5.616 1.29a10.267 10.267 0 0 1 2.5 1.688c-.369-3.047-1.458-5.013-2.76-6.258-1.62-1.55-3.666-2.078-5.356-2.078a.75.75 0 0 1-.75-.75V6.227c0-.22 0-.401-.003-.55Zm-.482-1.523c.257-.17.724-.416 1.247-.18.524.234.65.747.694 1.052.044.31.044.715.044 1.15V7.85c1.824.141 3.922.817 5.644 2.464 1.975 1.89 3.356 4.964 3.356 9.685a.75.75 0 0 1-1.414.349c-.656-1.25-1.864-2.295-3.377-3.032a11.56 11.56 0 0 0-4.209-1.112v1.62c0 .434 0 .84-.044 1.15-.044.304-.17.817-.694 1.052-.523.235-.99-.012-1.247-.181-.261-.173-.564-.442-.889-.73a109.7 109.7 0 0 1-.038-.035l-4.014-3.568c-.75-.665-1.37-1.217-1.796-1.718C4.58 13.268 4.26 12.7 4.26 12c0-.701.319-1.268.767-1.795.426-.5 1.047-1.053 1.796-1.718l4.014-3.568.038-.034c.325-.289.628-.558.889-.73Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.475 5.184 7.497 9.608c-.93.827-1.396 1.241-1.567 1.73a2 2 0 0 0 0 1.325c.171.488.637.902 1.567 1.729l4.978 4.425c.422.375.634.563.813.57a.5.5 0 0 0 .405-.182c.114-.139.114-.421.114-.986v-2.79c2.428 0 4.992.78 6.865 2.164.975.72 1.462 1.08 1.648 1.067a.451.451 0 0 0 .39-.24c.096-.16.01-.658-.16-1.653-1.104-6.466-5.554-8.196-8.743-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.813.57Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.476 5.183 7.498 9.608c-.93.827-1.396 1.24-1.568 1.73a2 2 0 0 0 0 1.324c.172.489.637.902 1.568 1.73l4.978 4.424c.422.376.633.563.812.57a.5.5 0 0 0 .405-.182c.114-.138.114-.42.114-.986v-2.79c2.428 0 4.993.78 6.865 2.165.975.72 1.463 1.08 1.648 1.067a.451.451 0 0 0 .39-.24c.096-.16.011-.658-.159-1.653-1.105-6.467-5.555-8.196-8.744-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.813.57Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MultipleForwardLeft