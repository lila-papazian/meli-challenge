import "./breadcrumb.scss";

export interface BreadcrumbProps {
  crumbs: string[];
}

export const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  return (
    <div className='breadcrumb'>
      <ul className='breadcrumb__list' role="list" tabIndex={0}>
        {crumbs.map((crumb, index) => (
          <li role="listitem" key={index} className='breadcrumb__item'>
            {crumb}
          </li>
        ))}
      </ul>
    </div>
  );
};
