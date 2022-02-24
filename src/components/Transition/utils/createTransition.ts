type CreateTransitionParams = {
  properties: string | string[]
  duration: number | string
  easing: string
  delay: number | string
}

export function formatMs(ms: number | string): string {
  return typeof ms === 'string' ? ms : `${ms}ms`
}

export default function createTransition({
  properties,
  duration,
  easing,
  delay,
}: CreateTransitionParams): string {
  return (Array.isArray(properties) ? properties : [properties])
    .map(
      (property) =>
        `${property} ${formatMs(duration)} ${easing} ${formatMs(delay)}`
    )
    .join(',')
}
