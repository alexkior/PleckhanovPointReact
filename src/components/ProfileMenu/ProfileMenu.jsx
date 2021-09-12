import React from "react";

function ProfileMenu() {
  return (
    <>
      <div class="profile-menu">
        <div class="profile-menu__inner">
          <div class="profile-menu__pic"></div>

          <div class="profile-menu__text-part">
            <h5 class="profile-menu__name">Андрей Талалаев</h5>

            <div class="profile-menu__count-box">
              <p class="profile-menu__count-text">
                Счет:
                <br />
                12 000 pp
              </p>
            </div>
          </div>

          <div class="filter__part">
            <ul class="filter__part_content">
              <li class="filter__part_list-profile">
                <p class="filter__text_active-profile">Аккаунт</p>
              </li>

              <li class="filter__part_list-profile">
                <p class="filter__text-profile">Покупки</p>
              </li>

              <li class="filter__part_list-profile">
                <p class="filter__text-profile">Выход</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMenu;
