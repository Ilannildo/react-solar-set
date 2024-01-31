import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AirbudsCaseOpen = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.955 19.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1.002 1.002 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H4.833c-.782 0-1.172 0-1.442.207-.07.053-.131.115-.184.184-.207.27-.207.66-.207 1.442V13c0 1.169 0 2.156.029 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2 4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942ZM20.5 5.941V4.625A2.625 2.625 0 0 0 17.875 2 4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47ZM8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 12.833c0-.781 0-1.172.207-1.442.053-.07.115-.131.184-.184.27-.207.66-.207 1.442-.207h14.334c.781 0 1.172 0 1.442.207.07.053.131.115.184.184.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-.167Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2 4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942ZM20.5 5.941V4.625A2.625 2.625 0 0 0 17.875 2 4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47ZM8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 12.833c0-.781 0-1.172.207-1.442.053-.07.115-.131.184-.184.27-.207.66-.207 1.442-.207h14.334c.781 0 1.172 0 1.442.207.07.053.131.115.184.184.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-.167ZM3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2 4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942ZM20.5 5.941V4.625A2.625 2.625 0 0 0 17.875 2 4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.125 2.75c-1.036 0-1.875.84-1.875 1.875v1.316c0 .95.77 1.721 1.72 1.721.87 0 1.574.705 1.574 1.574v1.014H9.75V6.375A3.625 3.625 0 0 0 6.125 2.75Zm5.125 7.5V6.375A5.125 5.125 0 0 0 6.125 1.25 3.375 3.375 0 0 0 2.75 4.625v1.316a3.22 3.22 0 0 0 3.22 3.221c.041 0 .074.033.074.074v1.014H4.796c-.359 0-.688 0-.96.03-.296.034-.614.111-.901.332-.122.093-.23.201-.323.323-.22.287-.298.605-.331.901-.031.272-.031.601-.031.96v.25c0 1.836 0 3.275.124 4.418.126 1.165.388 2.11.974 2.916a5.75 5.75 0 0 0 1.272 1.272c.807.586 1.75.848 2.916.974 1.143.124 2.582.124 4.419.124h.09c1.837 0 3.276 0 4.418-.124 1.166-.126 2.11-.388 2.917-.974a5.751 5.751 0 0 0 1.272-1.272c.586-.807.848-1.75.974-2.916.124-1.143.124-2.582.124-4.419v-.249c0-.359 0-.688-.03-.96-.034-.296-.111-.614-.332-.901a1.746 1.746 0 0 0-.323-.323c-.287-.22-.605-.298-.901-.331-.272-.031-.601-.031-.96-.031h-1.248V9.236c0-.041.033-.074.073-.074a3.22 3.22 0 0 0 3.221-3.22V4.624a3.375 3.375 0 0 0-3.375-3.375 5.125 5.125 0 0 0-5.125 5.125v3.875h-1.5ZM9 11.75c.228.304.591.5 1 .5h4c.409 0 .772-.196 1-.5H9Zm7.646 0a2.751 2.751 0 0 1-2.646 2h-4a2.751 2.751 0 0 1-2.646-2h-2.52c-.409 0-.653.001-.83.021a.594.594 0 0 0-.158.032.252.252 0 0 0-.043.043.593.593 0 0 0-.032.158 8.49 8.49 0 0 0-.021.83V13c0 1.892.001 3.25.115 4.302.112 1.038.328 1.688.697 2.196.262.36.58.678.94.94.508.37 1.158.585 2.196.697 1.052.114 2.41.115 4.302.115 1.892 0 3.25-.001 4.302-.115 1.038-.113 1.688-.328 2.196-.697.36-.262.678-.58.94-.94.37-.508.585-1.158.697-2.196.114-1.052.115-2.41.115-4.302v-.167c0-.408-.001-.652-.021-.829a.594.594 0 0 0-.032-.158.255.255 0 0 0-.043-.043.594.594 0 0 0-.158-.032 8.486 8.486 0 0 0-.83-.021h-2.52Zm-.19-1.5H14.25V6.375a3.625 3.625 0 0 1 3.625-3.625c1.035 0 1.875.84 1.875 1.875v1.316c0 .95-.77 1.721-1.72 1.721-.87 0-1.574.705-1.574 1.574v1.014Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.5 4.625v1.316a2.47 2.47 0 0 0 2.47 2.471c.455 0 .824.369.824.824V10H10.5V6.375A4.375 4.375 0 0 0 6.125 2 2.625 2.625 0 0 0 3.5 4.625ZM20.5 4.625v1.316a2.47 2.47 0 0 1-2.47 2.471.824.824 0 0 0-.824.824V10H13.5V6.375A4.375 4.375 0 0 1 17.875 2 2.625 2.625 0 0 1 20.5 4.625ZM3.207 11.391C3 11.661 3 12.051 3 12.833V13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1.002 1.002 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H16.75A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.833c-.782 0-1.172 0-1.442.207-.07.053-.131.115-.184.184Z" fill="currentColor" /><path d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25h-6.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.207 11.391C3 11.661 3 12.051 3 12.833V13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1.002 1.002 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H16.75A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.833c-.782 0-1.172 0-1.442.207-.07.053-.131.115-.184.184Z" fill="currentColor" /><path d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25h-6.5Z" fill="currentColor" /><path opacity={0.5} d="M14 13.75A2.75 2.75 0 0 0 16.75 11h-1.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 13.75h4Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M3.5 4.625v1.316a2.47 2.47 0 0 0 2.47 2.471c.455 0 .824.369.824.824V11H10.5V6.375A4.375 4.375 0 0 0 6.125 2 2.625 2.625 0 0 0 3.5 4.625ZM20.5 4.625v1.316a2.47 2.47 0 0 1-2.47 2.471.824.824 0 0 0-.824.824V11H13.5V6.375A4.375 4.375 0 0 1 17.875 2 2.625 2.625 0 0 1 20.5 4.625Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AirbudsCaseOpen