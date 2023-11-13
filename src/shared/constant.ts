export enum FilterType {
    HAVE_FILTER = 'Có filter',
    NO_FILTER = 'Không filter',
    REMOVE_WHEN_FILTER = 'Loại bỏ khi filter',
}

export function nextOption(currentOption: FilterType): FilterType {
    switch (currentOption) {
        case FilterType.HAVE_FILTER:
            return FilterType.NO_FILTER;
        case FilterType.NO_FILTER:
            return FilterType.REMOVE_WHEN_FILTER;
        case FilterType.REMOVE_WHEN_FILTER:
            return FilterType.HAVE_FILTER;
        default:
            return currentOption;
    }
}
