import { Menu } from './Menu'

const Header = () => {
  const header = 'БИЛЕТЫ И АБОНЕМЕНТЫ'
  const items = [
    {value: 'Как купить',
    href: '# ',
  },
  {value: 'Правила',
    href: '# ',
  },
  {value: 'Возврат билетов',
    href: '# ',
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