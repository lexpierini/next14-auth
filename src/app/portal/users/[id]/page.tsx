type PortalUserDetailPageParams = {
  params: {
    id: string;
  }
}

export default function PortalUserDetailPage(props: PortalUserDetailPageParams) {
  return (
    <div>{props.params.id}</div>
  )
}
