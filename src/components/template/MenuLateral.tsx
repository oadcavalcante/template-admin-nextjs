import { IconeAjustes, IconeHome, IconeSair, IconeSino } from "../icons/index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-200">
      <div
        className={`
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 to-purple-800
      h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Novidades" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={() => {
            console.log(`logout`);
          }}
          className={`text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white`}
        />
      </ul>
    </aside>
  );
}
