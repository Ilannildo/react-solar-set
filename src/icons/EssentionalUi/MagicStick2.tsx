import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MagicStick2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.923 8c.015.206.048.368.112.52.136.32.397.559.919 1.037l.475.435c1.837 1.683 2.756 2.524 2.54 3.47-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242.079-.346.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27.346-.043.661-.23 1.29-.602l.574-.34c2.215-1.311 3.322-1.967 4.136-1.502.492.282.68.861.741 1.842" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.53 16.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.94 5.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4-4 4 4 1.06-1.06-4-4-1.06 1.06Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.036 3.652c2.215-1.312 3.322-1.968 4.136-1.503.813.466.793 1.744.755 4.3l-.01.662c-.012.727-.017 1.09.118 1.41.136.319.397.558.919 1.036l.475.435c1.837 1.683 2.756 2.524 2.54 3.47-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242.079-.346.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27.346-.043.661-.23 1.29-.602l.574-.34Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17.53 16.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.94 5.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4-4 4 4 1.06-1.06-4-4-1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.036 3.652c2.215-1.312 3.322-1.968 4.136-1.503.813.466.793 1.744.755 4.3l-.01.662c-.012.727-.017 1.09.118 1.41.136.319.397.558.919 1.036l.475.435c1.837 1.683 2.756 2.524 2.54 3.47-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242.079-.346.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27.346-.043.661-.23 1.29-.602l.574-.34Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17.53 16.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.94 5.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4-4 4 4 1.06-1.06-4-4-1.06 1.06Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.544 1.499c-.716-.41-1.482-.254-2.2.042-.706.29-1.575.805-2.636 1.433l-.628.372c-.686.406-.846.484-1.002.504-.15.018-.31-.015-1.05-.243l-.68-.21c-1.142-.35-2.083-.64-2.827-.75-.771-.114-1.533-.068-2.14.488-.603.552-.726 1.307-.696 2.092.03.761.213 1.74.437 2.935l.133.707c.145.77.163.944.126 1.104-.037.163-.134.321-.601.97l-.429.594c-.727 1.009-1.32 1.832-1.678 2.515-.364.694-.59 1.438-.27 2.192.324.765 1.023 1.098 1.772 1.283.728.18 1.713.27 2.91.38l.713.065c.78.072.938.102 1.061.173.123.07.227.188.68.822l.413.58c.694.972 1.266 1.773 1.788 2.308.54.553 1.179.983 2.003.88.81-.101 1.345-.663 1.77-1.323.418-.648.84-1.57 1.359-2.698l.305-.665c.11-.24.193-.417.26-.553l.033.035 4 4a.75.75 0 1 0 1.06-1.061l-3.844-3.845.072-.025.683-.239c1.157-.405 2.104-.737 2.782-1.091.698-.365 1.296-.846 1.477-1.642.184-.805-.16-1.488-.646-2.094-.469-.584-1.193-1.247-2.07-2.05l-.524-.48c-.57-.523-.677-.642-.734-.776-.06-.14-.072-.311-.06-1.105l.011-.725c.02-1.224.034-2.228-.065-2.98-.101-.768-.35-1.508-1.068-1.92Zm-4.126 2.798c1.129-.668 1.904-1.125 2.497-1.37.592-.243.787-.182.884-.126.095.054.243.185.326.813.083.63.072 1.521.052 2.825l-.012.78c-.01.608-.019 1.126.18 1.595.2.473.58.819 1.016 1.218l.086.078.476.436c.937.859 1.573 1.444 1.96 1.927.38.472.387.682.355.822-.034.149-.147.351-.71.645-.57.298-1.412.595-2.641 1.026l-.733.256c-.579.202-1.063.371-1.442.718-.377.346-.592.814-.85 1.378l-.328.714c-.55 1.198-.93 2.02-1.282 2.567-.35.545-.559.63-.695.648-.123.015-.32-.004-.743-.439-.431-.442-.937-1.147-1.679-2.186l-.376-.526-.069-.097c-.342-.482-.641-.902-1.086-1.156-.443-.254-.958-.3-1.55-.354l-.12-.01-.647-.06c-1.278-.117-2.148-.198-2.752-.348-.595-.147-.707-.307-.752-.413-.05-.118-.083-.335.219-.91.302-.576.83-1.313 1.602-2.384l.461-.639c.363-.503.665-.92.779-1.42.114-.5.02-1.004-.093-1.6l-.143-.758c-.238-1.271-.4-2.141-.424-2.778-.024-.626.094-.822.21-.928.11-.101.305-.2.908-.11.616.09 1.447.344 2.666.72l.729.224c.568.176 1.057.327 1.568.263.505-.063.95-.328 1.477-.64l.676-.4Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.036 3.652-.573.339c-.63.373-.945.56-1.291.603-.347.043-.687-.061-1.365-.27l-.618-.19c-2.39-.736-3.584-1.103-4.302-.446-.718.657-.484 1.904-.016 4.397l.121.645c.133.709.2 1.063.12 1.409-.078.346-.293.645-.724 1.242l-.392.544C2.48 14.028 1.723 15.08 2.093 15.95c.37.872 1.621.987 4.126 1.216l.647.06c.712.064 1.068.097 1.366.267.298.17.504.46.917 1.038l.376.526c1.452 2.035 2.178 3.052 3.125 2.934.946-.119 1.486-1.295 2.566-3.646l.28-.609c.156-.341.273-.596.385-.795l4.589 4.59a.75.75 0 1 0 1.06-1.061L17.1 16.038c.122-.045.258-.092.411-.146l.624-.218c2.413-.846 3.62-1.268 3.835-2.213.215-.945-.703-1.786-2.54-3.469l-.475-.435c-.522-.478-.783-.717-.919-1.036-.135-.32-.13-.683-.118-1.41l.01-.661c.038-2.557.058-3.835-.755-4.3-.814-.466-1.921.19-4.136 1.502Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.563.36c-.617.394-.926.591-1.272.648-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13c-.696.68-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345.179-.945-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992-.149-.312-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.807-.928-4.236Z" fill="currentColor" /><path opacity={0.5} d="M15.93 16.991c.127-.268.239-.45.392-.6.172-.167.382-.282.71-.42l4.498 4.499a.75.75 0 0 1-1.06 1.06l-4.54-4.539Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MagicStick2