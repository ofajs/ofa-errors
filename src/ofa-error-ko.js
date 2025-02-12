const errorData = {
  "load_fail": "{url} 로드 실패",
  "load_fail_status": "{url} 로드 실패, 상태 코드: {status}",
  "load_module": "모듈 로드 실패, 모듈 주소: {url}",
  "no_alias": "별명: {name}을 찾을 수 없으므로 '{url}' 요청이 무효입니다",
  "config_alias_name_error": "별명 설정 오류, '@'로 시작해야 합니다",
  "alias_already": "별명 '{name}'이 이미 존재합니다",
  "alias_relate_name": "별명에 상대 주소를 사용할 수 없습니다, '{name}':'{path}'",
  "failed_to_set_data": "속성 값 {key} 설정 오류",
  "failed_to_get_data": "{key} 가져오기 오류",
  "nexttick_thread_limit": "nextTick 스레드 제한을 초과하여 무한 루프가 발생할 수 있습니다. 함수를 수정하거나 최적화해주세요.",
  "not_func": "{name} 메소드의 콜백 매개변수는 함수여야 합니다",
  "not_found_func": "'{name}' 메소드를 대상 {tag}에서 찾을 수 없습니다. {tag} 구성요소의 'proto'에서 '{name}' 메소드를 정의하십시오.",
  "invalid_key": "'{compName}' 구성요소를 등록하기 위한 매개변수가 올바르지 않습니다. '{targetName}'의 '{name}'이(가) 이미 사용 중입니다. '{name}'을 다른 이름으로 변경하십시오.",
  "xhear_wrap_no_parent": "대상 요소에 부모 요소가 없으므로 warp 메소드를 사용할 수 없습니다",
  "xhear_unwrap_has_siblings": "대상 요소에 인접한 노드가 있으므로 unwrap 메소드를 사용할 수 없습니다",
  "xhear_reander_err": "태그 '{tag}' 렌더링 실패",
  "xhear_register_exists": "컴포넌트 '{name}'이 이미 존재하므로 중복 등록할 수 없습니다",
  "xhear_register_err": "컴포넌트 '{tag}' 등록 오류",
  "xhear_validate_tag": "등록된 컴포넌트 이름 '{str}'이 잘못되었습니다. Web Components 명명 규칙은 다음 링크를 참조하세요: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names",
  "xhear_tag_noline": "등록된 컴포넌트 이름 '{str}'이 잘못되었습니다. 적어도 하나의 '-' 문자를 포함해야 합니다. Web Components 명명 규칙은 다음 링크를 참조하세요: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names",
  "xhear_regster_data_noset": "컴포넌트 {tag} 등록 오류, 사용자 정의 데이터에 'Set' 또는 'Map' 유형의 데이터가 나타날 수 없습니다",
  "xhear_regster_data_nofunc": "{tag} 구성요소 등록 중 오류가 발생했습니다. 함수는 사용자 정의 데이터에 나타날 수 없습니다. 함수를 'proto'에 배치하거나 '{key}'를 '_{key}'로 변경하세요. ",
  "xhear_fakenode_unclose": "닫히지 않은 FakeNode입니다; 잘못된 속성 이름 사용: {name}",
  "xhear_fill_tempname": "컴포넌트에 대한 템플릿 '{name}'을 찾을 수 없습니다",
  "xhear_eval": "템플릿 문법 오류 '{name}', 표현식 {name}:{arg0}=\"{arg1}\"",
  "xhear_listen_already": "기존 리스너가 이미 존재하여, 이 요소의 렌더링에 오류가 있습니다.",
  "xhear_dbfill_noname": "fill 컴포넌트 내에서 'name' 속성을 가진 fill 컴포넌트만 렌더링할 수 있습니다",
  "xhear_temp_exist": "템플릿 '{name}'이 이미 존재합니다",
  "xhear_sync_no_options": "직접 'sync' 메소드를 사용할 수 없습니다. 템플릿 렌더링에만 사용됩니다",
  "xhear_sync_object_value": "Object 유형의 값을 'sync'로 동기화할 수 없습니다, 대상 {targetName}",
  "loading_nothing": "Loading 함수가 내용을 반환하지 않습니다",
  "app_src_change": "이미 초기화된 app 요소의 src 속성을 변경할 수 없습니다",
  "no_cross_access_func": "도메인 간 페이지 이동을 위해서는 access 함수를 설정해야 합니다",
  "access_return_error": "{src}으로 이동할 수 없습니다",
  "load_comp_module": "컴포넌트 모듈 로드 오류, 잘못된 모듈 주소: {url}",
  "comp_registered": "컴포넌트 '{tag}'이 이미 등록되어 있어 중복 등록이 불가능합니다",
  "inject-link-rel": "inject-host 컴포넌트 내 link 요소의 rel 속성 값은 'stylesheet'만 가능합니다",
  "use-data-inject": "inject-host의 스타일 요소에서 data()를 사용하지 마세요. 심각한 성능 문제를 일으킬 수 있습니다",
  "load_page_module": "페이지 모듈 {url} 로드 실패",
  "page_no_defaults": "현재 페이지({src})는 이미 렌더링되었으므로 다시 렌더링할 수 없습니다",
  "not_page_module": "{src}은 페이지 모듈이 아니므로 page 컴포넌트의 src로 설정할 수 없습니다",
  "page_failed": "페이지 로드 실패: {src}",
  "fetch_temp_err": "페이지 모듈 {url}에서 템플릿 {tempSrc} 로드 실패",
  "page_wrap_fetch": "페이지 {before}가 부모 페이지({current})를 올바르게 가져올 수 없습니다",
  "context_change_name": "{compName}의 '이름'을 변경하면 성능 문제가 발생할 수 있습니다. 이 속성을 변경하지 마십시오.",
  "no_provider": "이름이 '{name}'인 소비자는 해당 공급자에 의해 캡처되지 않습니다.",
  "page_invalid_key": "{src} 페이지의 등록 매개변수가 올바르지 않으며 '{targetName}'의 '{name}'이(가) 사용되었습니다. '{name}'을(를) 다른 이름으로 변경해 주세요.",
  "root_provider_exist": "'{name}'이라는 루트 공급자에 예외가 있습니다. 루트 공급자 구성 요소는 한 번만 나타날 수 있습니다.",
  "root_provider_name_change": "'{name}'이라는 루트 공급자에 예외가 있습니다. 루트 공급자 구성 요소는 'name' 속성을 변경할 수 없습니다.",
  "change_lm_src": "{tag} 요소의 'src' 속성 변경이 잘못되었습니다. 이 속성은 한 번만 설정할 수 있습니다.",
  "error_no_owner": "이 데이터는 올바르지 않습니다. 소유자가 이 개체를 등록하지 않았습니다.",
  "circular_data": "순환 참조가 있는 개체",
  "fill_type": "'x-fill'의 '값'은 배열 유형이어야 하며 현재 값 유형은 {type}입니다.",
  "fill_key_duplicates": "채우기 구성 요소의 키가 중복되었습니다",
  "render_el_error": "렌더링 요소가 실패했습니다. 렌더링 오류는 {expr}입니다.",
  "temp_multi_child": "템플릿 요소는 하나의 하위 요소만 포함할 수 있습니다. 여러 하위 요소가 나타나면 하위 요소는 <div> 요소로 다시 래핑됩니다.",
  "temp_wrap_child": "'{tempName}' 템플릿에는 '{wrapName}' 속성이 있는 div 요소에 래핑된 {len} 하위 요소가 포함되어 있습니다.",
  "app_noback": "이미 첫 번째 페이지이므로 더 이상 '뒤로' 작업을 수행할 수 없습니다.",
  "invalidated_inject_host": "이 요소는 'inject-host'에서 무효화됩니다.",
  "olink_out_app": "[olink] 요소는 o-app 내에서만 사용할 수 있습니다.",
  "app_noforward": "이 페이지는 마지막 페이지입니다. 더 이상 '앞으로' 작업을 수행할 수 없습니다.",
  "need_forwards": "대상 o-app은 전달 작업을 허용하지 않습니다. 대상에 '_forwards' 속성을 추가하거나 앱 구성 파일에 'export constallowForward = true'를 추가하세요.",
  "watchuntil_timeout": "watchUntil 시간 초과, 목표 값 모니터링 안 됨"
};

const jsonStr = JSON.stringify(errorData);

if (localStorage["ofa-errors"] !== jsonStr) {
  localStorage["ofa-errors"] = jsonStr;
}

localStorage["ofa-errors-time"] = Date.now();
