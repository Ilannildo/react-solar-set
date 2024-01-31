import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const EraserSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.67 11.606.53.53-.53-.53ZM6 13.968h-.75H6ZM10.032 18v.75V18Zm1.574-10.33-.53-.53.53.53Zm1.045 8.403a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-3.663-5.784a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm6.812 1.574L11.863 15.8l1.061 1.06 3.936-3.936-1.06-1.06Zm-7.6.274L12.137 8.2l-1.061-1.06-3.936 3.936 1.06 1.06Zm0 3.663c-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478.316.414.777.873 1.319 1.414L8.2 15.8Zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l-1.06-1.061Zm4.723 4.724c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571.414-.316.872-.777 1.414-1.319l-1.06-1.06ZM7.14 16.86c.541.542 1 1.003 1.414 1.319.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186l-1.06 1.06ZM15.8 8.2c.571.572.946.949 1.186 1.264.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478-.316-.414-.777-.873-1.319-1.414L15.8 8.2Zm1.06 4.724c.542-.542 1.003-1 1.319-1.414.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l1.06 1.061Zm0-5.784c-.541-.542-1-1.003-1.414-1.319-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264.315.24.692.615 1.264 1.186l1.06-1.06ZM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571-.414.316-.872.777-1.414 1.319l1.06 1.06Zm1.574 6.812L8.988 10.29l-1.061 1.06 4.724 4.724 1.06-1.06Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.67 11.606.53.53-.53-.53ZM6 13.968h-.75H6ZM10.032 18v.75V18Zm1.574-10.33-.53-.53.53.53Zm1.045 8.403a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-3.663-5.784a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm6.812 1.574L11.863 15.8l1.061 1.06 3.936-3.936-1.06-1.06Zm-7.6.274L12.137 8.2l-1.061-1.06-3.936 3.936 1.06 1.06Zm0 3.663c-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478.316.414.777.873 1.319 1.414L8.2 15.8Zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l-1.06-1.061Zm4.723 4.724c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571.414-.316.872-.777 1.414-1.319l-1.06-1.06ZM7.14 16.86c.541.542 1 1.003 1.414 1.319.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186l-1.06 1.06ZM15.8 8.2c.571.572.946.949 1.186 1.264.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478-.316-.414-.777-.873-1.319-1.414L15.8 8.2Zm1.06 4.724c.542-.542 1.003-1 1.319-1.414.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l1.06 1.061Zm0-5.784c-.541-.542-1-1.003-1.414-1.319-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264.315.24.692.615 1.264 1.186l1.06-1.06ZM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571-.414.316-.872.777-1.414 1.319l1.06 1.06Zm1.574 6.812L8.988 10.29l-1.061 1.06 4.724 4.724 1.06-1.06Z" fill="currentColor" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.67 11.606.53.53-.53-.53ZM6 13.968h-.75H6ZM10.032 18v.75V18Zm1.574-10.33-.53-.53.53.53Zm1.045 8.403a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-3.663-5.784a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm6.812 1.574L11.863 15.8l1.061 1.06 3.936-3.936-1.06-1.06Zm-7.6.274L12.137 8.2l-1.061-1.06-3.936 3.936 1.06 1.06Zm0 3.663c-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478.316.414.777.873 1.319 1.414L8.2 15.8Zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l-1.06-1.061Zm4.723 4.724c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571.414-.316.872-.777 1.414-1.319l-1.06-1.06ZM7.14 16.86c.541.542 1 1.003 1.414 1.319.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186l-1.06 1.06ZM15.8 8.2c.571.572.946.949 1.186 1.264.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478-.316-.414-.777-.873-1.319-1.414L15.8 8.2Zm1.06 4.724c.542-.542 1.003-1 1.319-1.414.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l1.06 1.061Zm0-5.784c-.541-.542-1-1.003-1.414-1.319-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264.315.24.692.615 1.264 1.186l1.06-1.06ZM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571-.414.316-.872.777-1.414 1.319l1.06 1.06Zm1.574 6.812L8.988 10.29l-1.061 1.06 4.724 4.724 1.06-1.06Z" fill="currentColor" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.888 16.896c-.526.526-.973.974-1.378 1.283-.432.329-.902.571-1.478.571s-1.046-.242-1.478-.571c-.405-.31-.852-.757-1.379-1.283l-.07-.071c-.527-.527-.975-.974-1.284-1.38-.329-.43-.571-.901-.571-1.477 0-.576.242-1.046.571-1.478.31-.405.757-.852 1.283-1.378l4.008-4.008c.526-.526.973-.974 1.378-1.283.432-.329.902-.571 1.478-.571s1.046.242 1.478.571c.405.31.852.757 1.379 1.283l.07.071c.527.527.975.974 1.284 1.38.329.43.571.901.571 1.477 0 .576-.242 1.046-.571 1.478-.31.405-.757.852-1.283 1.378l-4.008 4.008ZM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264.116 0 .27.036.568.264.315.24.692.615 1.264 1.186.571.572.946.949 1.186 1.264.228.298.264.452.264.568 0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l-2.62 2.619-3.662-3.663L12.137 8.2Zm-3.68 3.68 3.663 3.663-.257.257c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568 0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l.257-.257Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm5.524 6.825 4.723 4.723 2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362 0-.692-.557-1.249-1.67-2.362S14.66 6 13.968 6c-.692 0-1.248.557-2.362 1.67l-2.618 2.619Zm3.406 6.041.257-.257-4.724-4.724-.257.257C6.557 12.72 6 13.276 6 13.968c0 .692.557 1.249 1.67 2.362S9.34 18 10.032 18c.692 0 1.248-.557 2.362-1.67Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z" fill="currentColor" /><path d="m8.988 10.289 4.723 4.723 2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362 0-.692-.557-1.249-1.67-2.362S14.66 6 13.968 6c-.692 0-1.248.557-2.362 1.67l-2.618 2.619ZM12.394 16.33l.257-.257-4.724-4.724-.257.257C6.557 12.72 6 13.276 6 13.968c0 .692.557 1.249 1.67 2.362S9.34 18 10.032 18c.692 0 1.248-.557 2.362-1.67Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default EraserSquare