import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CategoryAside({ categoriesData, goMainCategories, goSubCategories }) {
  return (
    <CategoryListWrap>
      {categoriesData &&
        categoriesData.map(categories => {
          return (
            <CategoryTitle key={categories.id} onClick={() => goMainCategories}>
              <Link to={`?category_id=${categories.id}`}>
                {categories.name}
              </Link>
              {categories.sub_category.map(subCategory => {
                return (
                  <SubCategoryTitle
                    key={subCategory.id}
                    onClick={() => goSubCategories}
                  >
                    <Link to={`?sub_category_id=${subCategory.id}`}>
                      {subCategory.name}
                    </Link>
                  </SubCategoryTitle>
                );
              })}
            </CategoryTitle>
          );
        })}
    </CategoryListWrap>
  );
}

export default CategoryAside;

const CategoryListWrap = styled.ul`
  border-right: 1px solid #333;
  padding-right: 20px;
`;

const CategoryTitle = styled.li`
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: 500;
  a {
    color: #333;
  }
`;

const SubCategoryTitle = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 5px 0 0 10px;
  color: #333;
`;
