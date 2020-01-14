// 使svg能够在ts中用引入模块的方式加载

declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const content: SvgrComponent
  export default content
}
