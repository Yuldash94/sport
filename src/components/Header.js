import { Menu } from './Menu'

const Header = () => {
  const header = 'БИЛЕТЫ И АБОНЕМЕНТЫ'
  const items = [
    {value: 'Как купить',
    href: '# ',
    id: '1',
  },
  {value: 'Правила',
    href: '# ',
    id: '2',
  },
  {value: 'Возврат билетов',
    href: '# ',
    id: '3',
  },
  ]
  return (
    <div>
      <header>
      <Menu header={header} items={items}/>
        <nav>
          <div className='burger_btn'>
            <span/>
          </div>
        </nav>      
      </header>
    </div>
  )
}

export default Header