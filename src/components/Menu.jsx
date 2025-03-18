import styled from 'styled-components'
import { theme } from '../styles/theme'

const MenuSection = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.lightGray};
  overflow: hidden;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.xl};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.primary};
  }
`

const MenuContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.md};
  }
`

const MenuGrid = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.md} 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  padding-bottom: ${theme.spacing.md};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.sm} 0;
    padding-bottom: ${theme.spacing.md};
  }
`

const MenuCategory = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  min-width: 280px;
  max-width: 320px;
  flex-shrink: 0;
  scroll-snap-align: start;

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: 260px;
    max-width: 300px;
    padding: ${theme.spacing.md};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
  font-weight: 500;
  position: relative;
  padding-bottom: ${theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.primary};
  }
`

const MenuItem = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 500;
`

const ItemDescription = styled.p`
  color: ${theme.colors.darkGray};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.95rem;
`

const AllergenInfo = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.85rem;
  font-style: italic;
`

const Menu = () => {
  const menuCategories = [
    {
      title: 'Appetizers',
      items: [
        {
          title: 'Taameya (Egyptian Falafel)',
          description: 'Crispy deep-fried patties made from fava beans, served with tahini and pita bread.',
          allergens: 'Contains: Legumes, Sesame, Gluten (if served with pita)'
        },
        {
          title: 'Stuffed Vine Leaves (Warak Enab)',
          description: 'Grape leaves stuffed with a flavorful mix of rice, herbs, and spices.',
          allergens: 'Contains: None (check for cross-contamination)'
        },
        {
          title: 'Eggplant Mesaka\'a',
          description: 'A rich and tangy eggplant dish cooked with tomato sauce, garlic, and peppers, served with bread.',
          allergens: 'Contains: Gluten (if served with bread)'
        }
      ]
    },
    {
      title: 'Lunch',
      items: [
        {
          title: 'Koshary',
          description: 'A beloved Egyptian street food made with layers of rice, lentils, pasta, and chickpeas, topped with a spiced tomato sauce and crispy fried onions.',
          allergens: 'Contains: Gluten, Legumes'
        },
        {
          title: 'Shawarma Platter',
          description: 'Marinated beef or chicken cooked on a vertical rotisserie, served with garlic sauce, tahini, pickles, and pita bread.',
          allergens: 'Contains: Gluten, Sesame, Dairy (if yogurt-based sauce is included)'
        },
        {
          title: 'Molokhia with Chicken',
          description: 'A green leafy stew made from jute leaves, cooked with garlic and coriander, served with rice and roasted chicken.',
          allergens: 'Contains: None (check for cross-contamination)'
        },
        {
          title: 'Hawawshi',
          description: 'A crispy pita stuffed with seasoned ground beef, onions, and spices, baked until golden brown.',
          allergens: 'Contains: Gluten'
        }
      ]
    },
    {
      title: 'Dinner',
      items: [
        {
          title: 'Fatta',
          description: 'A festive dish of layered crispy bread, rice, slow-cooked beef, and a garlicky tomato sauce.',
          allergens: 'Contains: Gluten, Dairy (if yogurt is used in some variations)'
        },
        {
          title: 'Samak Mashwi',
          description: 'Grilled fish (often sea bass or mullet) marinated in lemon, garlic, and spices, served with rice and tahini sauce.',
          allergens: 'Contains: Fish, Sesame (in tahini)'
        },
        {
          title: 'Moussaka (Egyptian Style)',
          description: 'A baked dish of fried eggplant layered with ground beef and rich tomato sauce, served with bread or rice.',
          allergens: 'Contains: Gluten (if served with bread), Dairy (if topped with béchamel)'
        }
      ]
    },
    {
      title: 'Dessert',
      items: [
        {
          title: 'Basbousa',
          description: 'A semolina cake soaked in sweet syrup, often topped with almonds or coconut.',
          allergens: 'Contains: Gluten, Dairy, Nuts (if almonds are added)'
        },
        {
          title: 'Om Ali',
          description: 'A warm bread pudding made with milk, nuts, raisins, and coconut, baked to golden perfection.',
          allergens: 'Contains: Gluten, Dairy, Nuts'
        }
      ]
    }
  ]

  return (
    <MenuSection id="menu">
      <SectionTitle>Our Menu</SectionTitle>
      <MenuContainer>
        <MenuGrid>
          {menuCategories.map((category, index) => (
            <MenuCategory key={index}>
              <CategoryTitle>{category.title}</CategoryTitle>
              {category.items.map((item, itemIndex) => (
                <MenuItem key={itemIndex}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                  <AllergenInfo>{item.allergens}</AllergenInfo>
                </MenuItem>
              ))}
            </MenuCategory>
          ))}
        </MenuGrid>
      </MenuContainer>
    </MenuSection>
  )
}

export default Menu 