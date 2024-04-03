// todo - Check if the url has a query string of `chain`
// todo - Check chain query params present, set the state-store and save current params-info to localstorage
// todo - if query params not found, we check the localstorage and get the recent chain value
// todo - on chain value change, we set the state store so that the acton can reflect immediately (change the query params in url) and save to local storage
// todo - if there is no query and there is no params in local storage, defualt to eth

import network_chains_options, { ETHEREUM } from "@/data/network-chains"
import { chain_keyword } from "@/state-store/network-chain"

function filterChainQuery(chain_query) {
    // check if query does not match any of the registered ones [returns the keyword]
    return Object.keys(network_chains_options).filter(
        key => network_chains_options[key].query_value === chain_query
    )
}

function handleNetworkChain(chain_query) {
    if (!chain_query || filterChainQuery(chain_query).length === 0) {
        const keyword = localStorage.getItem(chain_keyword)
        chain_query = network_chains_options[keyword ? keyword : ETHEREUM]
    } else {
        const [ query ] = filterChainQuery(chain_query)
        chain_query = network_chains_options[query]
    }

    return chain_query
}

export default handleNetworkChain


// Extra helper function
export function setChainKeywordToLocalStorage(keyword) {
    localStorage.setItem(chain_keyword, keyword)
}