import { ComponentStory } from '@storybook/react'
import moment from 'moment'
import { HomePageTemplate } from '.'
import { Banner } from '../../molecules/Banner'
import { CashKickCard } from '../../molecules/CashCickCard'
import CardsGrid from '../../organisms/CardsGrid'
import Header from '../../organisms/Header'
import { PaymentsTable } from '../../organisms/PaymentsTable'
import { TableBox } from '../../organisms/TableBox'

export default {
  title: 'templates/HomePageTemplate',
  component: HomePageTemplate,
}

const Template: ComponentStory<typeof HomePageTemplate> = (args) => (
  <HomePageTemplate {...args} />
)

export const HomePage = Template.bind({})
HomePage.args = {
  headerBox: (
    <Header
      title={'Good Afternoon'}
      subtitle={moment().format("MMMM DD, YYYY")}
      width={100}
    />
  ),
  cardsGrid: <Banner />,
  cashKickCard: (
    <CashKickCard balanceAmount={'$87,63,452'} handleClick={() => {}} />
  ),
  tableBox: (
    <TableBox
      text={'Your payments'}
      variant={'normal'}
      table={
        <PaymentsTable
          amount={[170454.55]}
          cashKickDate={[moment().format('MMM DD, YYYY')]}
        />
      }
    />
  ),
}
