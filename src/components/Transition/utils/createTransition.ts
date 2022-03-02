type CreateTransitionParams = {
  properties: string | string[]
  duration: number
  easing: string
  delay: number
}

export default function createTransition({
  properties,
  duration,
  easing,
  delay,
}: CreateTransitionParams): string {
  return (Array.isArray(properties) ? properties : [properties])
    .map((property) => `${property} ${duration}ms ${easing} ${delay}ms`)
    .join(',')
}
