import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLinkSettings(props: LinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-base font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
